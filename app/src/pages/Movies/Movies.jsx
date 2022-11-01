import { useState, useEffect } from "react";
import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Movie from "../Movie";
import axios from "axios";

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

  const deleteMovie = async (id) => {
    await axios({
      //es necesario el await??
      method: "delete",
      url: `http://localhost:8080/movies/${id}`,
    });

    const newList = movies.filter((movie) => movie.id != id);
    setMovies(newList);
  };

  return (
    <div>
      <h2>Pelis por ver 📌</h2>
      <Container>
        <Grid container spacing={3}>
          {movies.map((movie) => (
            <Grid
              item
              className="moviecard"
              key={movie.id}
              xs={6}
              md={6}
              lg={4}
            >
              <Movie movie={movie} deleteMovie={deleteMovie} />
              {/* //mirar esto bien */}
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
