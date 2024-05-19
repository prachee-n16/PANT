import React from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./theme";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  const { theme } = Theme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/app" element={<Chat />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
