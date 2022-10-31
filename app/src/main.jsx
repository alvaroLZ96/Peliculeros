import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import Movies from "./pages/Movies/Movies";
import NewMovie from "./pages/NewMovie";
import Movie from "./pages/Movie";
import About from "./pages/about";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="pelis" element={<Movies />} />
          <Route path="pelis/:id" element={<Movie />} />
          <Route path="ponmeotra" element={<NewMovie />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
