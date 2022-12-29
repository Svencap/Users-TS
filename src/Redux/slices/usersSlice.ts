import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../index";

type Adress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Adress;
  phone: string;
  website: string;
  company: Company;
};

interface Users {
    data: User[]
}

export const fetchGetUsers = createAsyncThunk(
  "users/fetchGetUsers",
  async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  }
);

const getNormalalized = (data: any): { entities: any, ids: number[] } => {
  const entities = data.reduce((acc: any, item: User) => {
    acc[item.id] = item;
    return acc;
  }, {});

  const ids = data.map((item: User) => item.id);
  return { entities, ids };
};

const usersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id,
});

export const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    joinUser: usersAdapter.addOne,
    leaveUser: usersAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetUsers.fulfilled, (state, { payload }) => {
        const { entities, ids } = getNormalalized(payload);
        state.entities = entities;
        state.ids = ids;
      });
  },
});

export const { actions } = usersSlice;
export const usersSelectors = usersAdapter.getSelectors<RootState>((state) => state.users);

export default usersSlice.reducer;
