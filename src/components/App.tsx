import React from "react";
import { useEffect } from "react";
import { Container } from "@mui/material";
import Navbar from "./Navbar";
import { Box } from "@mui/system";
import UsersList from "./UsersList";
import { useAppDispatch } from "../Redux/hooks";
import { fetchGetUsers } from "../Redux/slices/usersSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGetUsers());
  }, []);

  return (
      <Box sx={{ height: '100%', display: 'flex' }}>
        <Navbar />
        <UsersList />
      </Box>
  );
}

export default App;
