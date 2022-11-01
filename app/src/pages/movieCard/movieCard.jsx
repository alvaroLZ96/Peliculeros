import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import "./styles.css";

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
    <div className="cardDiv">
      {movie ? (
        <>
          <ul className="movieDiv">
            <h3>{movie.name}</h3>
            <li>{movie.year}</li>
            <li>{movie.country}</li>
            <li>{movie.director}</li>
            <li>{movie.duration}</li>
            <li>{movie.sinopsis}</li>
          </ul>
          <figure>
            <img src={movie.poster} alt={movie.name} />
          </figure>
        </>
      ) : (
        <div>Not Exists</div>
      )}
    </div>
  );
};

export default MovieCard;
