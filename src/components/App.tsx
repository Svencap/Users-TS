import React from "react";
import { useEffect } from "react";
import { Container } from "@mui/material";
import Navbar from "./Navbar";
import { Box } from "@mui/system";
import UsersList from "./UsersList";
import UserEdit from "./UserEdit";
import { useAppDispatch } from "../Redux/hooks";
import { fetchGetUsers } from "../Redux/slices/usersSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGetUsers());
  }, []);

  return (
    <BrowserRouter>
      <Box sx={{ height: "100%", display: "flex" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path=":id" element={<UserEdit />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
