import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";

const MovieCard = () => {
  const [movie, setMovie] = useState({});

  const params = useParams();
  console.log(params);
  const { id } = params;

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetch(`http://localhost:8080/pelis/${id}`);
      const res = await data.json();
      setMovie(res);
    };

    getMovie();
  }, []);

  return (
    <div className="movie">
      {movie ? (
        <figure className="cardDiv">
          <h3>{movie.name}</h3>
          <h3>{movie.year}</h3>
          <h3>{movie.country}</h3>
          <h3>{movie.director}</h3>
          <h3>{movie.duration}</h3>
          <h3>{movie.sinopsis}</h3>
          <img src={movie.poster} alt={movie.name} />
        </figure>
      ) : (
        <div>Not Exists</div>
      )}
    </div>
  );
};

export default MovieCard;
