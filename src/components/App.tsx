import React from "react";
import { Container } from "@mui/material";
import Navbar from "./Navbar";
import { Box } from "@mui/system";
import UsersList from "./UsersList";

function App() {
  return (
      <Box sx={{ height: '100%', display: 'flex' }}>
        <Navbar />
        <UsersList />
      </Box>
  );
}

export default App;
