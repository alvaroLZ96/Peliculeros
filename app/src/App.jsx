import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/Footer";

const theme = createTheme({
  typography: {
    fontFamily: ["Shadows Into Light", "cursive"].join(","),
    fontSize: 20,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
