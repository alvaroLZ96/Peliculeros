import { useState, useEffect } from "react";
import React from "react";
import { getMovie } from "../services/NewFetch";
import { useDebounce } from "use-debounce";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

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
        whileHover={{ scale: 1.5, width: 250 }}
        whileTap={{ scale: 1.5, width: 250 }}
        transition={{ duration: 0.3 }}
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      ></motion.input>
      <ul className="homeList">
        {moviesCollection.map((movie) => (
          <li key={uuidv4()}>
            <h1>{movie.name}</h1>
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
