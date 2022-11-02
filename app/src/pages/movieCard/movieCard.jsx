import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import "./styles.css";
import Card from "../../components/Card";
import Image from "../../components/image";

const MovieCard = () => {
  const [movie, setMovie] = useState({});

  const params = useParams();
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
          <Card item={movie} />

          <Image source={movie.poster} alternative={movie.name} />
        </>
      ) : (
        <div>Not Exists</div>
      )}
    </div>
  );
};

export default MovieCard;
