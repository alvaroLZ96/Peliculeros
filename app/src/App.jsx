import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
