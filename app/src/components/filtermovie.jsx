import { useState, useEffect } from "react";
import React from "react";
import { getMovie } from "../services/NewFetch";
import { useDebounce } from "use-debounce";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Image from "./image";
import { getMovies } from "../API/api";

export const FilterMovie = () => {
  const [filter, setFilter] = useState("");
  const [moviesCollection, setMoviesCollection] = useState([]);
  const [debounceFilter] = useDebounce(filter, 1000);
  //TERCERA VIA (POR QUÉ ESTÁ MAL?)
  /* useEffect(() => {
    getMovies().then((data) => {
      setMoviesCollection(
        data.filter((movie) => {
          console.log(movie);
          return movie.name.includes(filter.toLowerCase);
        })
      );
    });
  }, [setMoviesCollection]); */

  //PRIMERA OPCIÓN
  useEffect(() => {
    getMovie(filter.toLowerCase()).then((res) => setMoviesCollection([res]));
  }, [debounceFilter]);

  //SEGUNDA OPCIÓN
  /*  useEffect(() => {
    loadingData();
  }, [debounceFilter]);

  const loadingData = () => {
    if (filter === "") {
      getMovies().then((data) => {
        setMoviesCollection(data);
      });
    } else {
      const filteredMovies = filtered("name", moviesCollection);
      setMoviesCollection(filteredMovies);
    }
  };

  const filtered = (name, list) => {
    return list.filter((item) =>
      item[name].toLowerCase().includes(filter.toLowerCase())
    );
  }; */
  //FIN DE LA SEGUNDA OPCIÓN AQUÍ
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
      {/* {moviesCollection.length === 0 ? (
        <p> Movie not Found</p>
      ) : ( */}
      <ul className="homeList">
        {moviesCollection.map((movie) => (
          <li key={uuidv4()}>
            <h1>{movie.name}</h1>
            <NavLink to={`/pelis/${movie.id}`}>
              {/* <img src={movie.poster} alt={movie.name} /> */}
              <Image source={movie.poster} alternative={movie.name} />
            </NavLink>
          </li>
        ))}
      </ul>
      {/*   )} */}
    </div>
  );
};
export default FilterMovie;
