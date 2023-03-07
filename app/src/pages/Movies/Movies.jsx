import { useState, useEffect } from "react";
import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Movie from "../../components/Movie";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetch("http://localhost:8080/pelis");
      const res = await data.json();
      setMovies(res);
    };
    getMovies();
  }, []);

  const deleteMovie = async (id) => {
    await axios({
      method: "delete",
      url: `http://localhost:8080/pelis/${id}`,
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );

};

export default Movies;
