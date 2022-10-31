import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "./styles.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Movie from "../Movie";

/* import { getMovie } from "../../services/NewFetch";
import { useDebounce } from "use-debounce"; */

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetch("http://localhost:8080/movies");
      const res = await data.json();
      setMovies(res);
    };
    getMovies();
  }, []);

  return (
    <div>
      <h2>Pelis por ver 📌</h2>
      <Container>
        <Grid container>
          {movies.map((movie) => (
            <Grid
              item
              className="moviecard"
              key={movie.id}
              xs={12}
              md={6}
              lg={4}
            >
              <Movie note={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );

  /* const NewFetch =()=>{
    const [filter, setFilter] = useState("");
    const [moviesCollection, setMoviesCollection] = useState([]);
    const [debounceFilter] = useDebounce(filter, 500);
  
    useEffect(() => {
      getMovie(filter).then((res) => setMoviesCollection([res]));
    }, [debounceFilter]);
    return (
      <>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <ul>
          {moviesCollection.map((movie) => (
            <li key={movie.name}>
              <h1>{movie.name}</h1>
              <img src={movie.sinopsis} alt={movie.name} />
            </li>
          ))}
        </ul>
      </>
    );
  
  
  }
  export default NewFetch */

  /* 
  {movies.map((movie) => (
    <div className="moviecard" key={movie.name}>
      {
        <Link to={`/movies/${movie.id}`}>
          <h1>{movie.name}</h1>
        </Link>
      }
      <img src={movie.poster} alt={movie.name} />
    </div> */
};

export default Movies;
