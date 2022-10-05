import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { RecoilRoot } from "recoil";
import { LoginPage } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import { Navigation } from "./Pages/Navigation";

export default function App() {
  return (
    <Container maxWidth="sm">
      <RecoilRoot>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App example
          </Typography>
          
        </Box>
        <Navigation />
        <Routes>
          <Route index path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </RecoilRoot>
    </Container>
  );
}
