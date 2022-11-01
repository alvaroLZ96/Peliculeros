import { useState, useEffect } from "react";
import React from "react";
import { getMovie } from "../services/NewFetch";
import { useDebounce } from "use-debounce";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const FilterMovie = () => {
  const [filter, setFilter] = useState("");
  const [moviesCollection, setMoviesCollection] = useState([]);
  const [debounceFilter] = useDebounce(filter, 500);

  useEffect(() => {
    getMovie(filter).then((res) => setMoviesCollection([res]));
  }, [debounceFilter]);

  return (
    <div className="homeMovie">
      <motion.input
        whileHover={{ scale: 1.5, width: 200 }}
        whileTap={{ scale: 1.5, width: 200 }}
        transition={{ duration: 0.3 }}
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      ></motion.input>
      <ul className="homeList">
        {moviesCollection.map((movie) => (
          <li key={movie.name}>
            <h1>{movie.name}</h1>
            {console.log(movie)}
            <NavLink to={`/pelis/${movie.id}`}>
              <img src={movie.poster} alt={movie.name} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FilterMovie;
