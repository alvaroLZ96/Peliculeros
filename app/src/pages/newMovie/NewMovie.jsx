import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
/* import Card from "../../components/Card";
import Image from "../../components/image"; */
/* import MoviesGallery from "../components/MoviesGallery"; */
const NewMovie = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  /*  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [year, setYear] = useState(0);
  const [country, setCountry] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [sinopsis, setSinopsis] = useState(""); */

  /* const [movies, setMovies] = useState([]); */
  /* 
  useEffect(() => {
    const getMovies = async () => {
      const data = await fetch("http://localhost:8080/movies");
      const res = await data.json();
      setMovies(res);
    };

    getMovies();
  }, []); */

  const createMovie = (ev) => {
    //Prevenimos el comportamiento por defecto del evento submit (recargar la página)
    ev.preventDefault();
    //Conformar un objeto llamado movie
    /* const movie = {
      name: name,
      poster: poster,
      year: year,
      country: country,
      director: director,
      duration: duration,
      sinopsis: sinopsis, */
    setMovie({ ...movie, id: uuidv4() });
    postMovie(movie);
  };

  const postMovie = async (item) => {
    axios({
      method: "post",
      url: "http://localhost:8080/pelis",
      data: item,
    }).then((res) => {
      if (res.status === 201) {
        console.log(res.status);
        navigate("/pelis");
      } else if (res.status !== 201) {
        console.log("no funciono");
        alert("no funciono");
      }
    });
  };

  return (
    <div className="formDiv">
      <form onSubmit={(ev) => createMovie(ev)}>
        <fieldset>
          <legend>Añade una peli que quieres ver</legend>
          <label htmlFor="name">&nbsp;Título:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(ev) => setMovie({ ...movie, name: ev.target.value })}
          />

          <label htmlFor="poster">&nbsp;&nbsp;Poster:</label>
          <input
            type="text"
            name="poster"
            id="poster"
            onChange={(ev) => setMovie({ ...movie, poster: ev.target.value })}
          />
          <label htmlFor="year">&nbsp;&nbsp;Año:</label>
          <input
            type="number"
            name="year"
            id="year"
            min={1900}
            onChange={(ev) => setMovie({ ...movie, year: ev.target.value })}
          />
          <label htmlFor="country">&nbsp;&nbsp;País:</label>
          <input
            type="text"
            name="country"
            id="country"
            onChange={(ev) => setMovie({ ...movie, country: ev.target.value })}
          />
          <label htmlFor="director">&nbsp;&nbsp;Dirección:</label>
          <input
            type="text"
            name="director"
            id="director"
            onChange={(ev) => setMovie({ ...movie, director: ev.target.value })}
          />
          <br></br>
          <label htmlFor="duration">Duración:</label>
          <input
            type="text"
            name="duration"
            id="duration"
            onChange={(ev) => setMovie({ ...movie, duration: ev.target.value })}
          />
          <label htmlFor="sinopsis">&nbsp;&nbsp;Sinopsis:</label>
          <input
            type="text"
            name="sinopsis"
            id="sinopsis"
            onChange={(ev) => setMovie({ ...movie, sinopsis: ev.target.value })} //METER UN TEXTAREA CON MATERIAL
          />
        </fieldset>
        <button type="submit">
          <span className="button_top"> Añadir</span>
        </button>
      </form>
      <div className="preview">
        {/* <Card item={movie} />
        <Image source={movie.poster} alternative={movie.name} size="7rem" /> */}
        <p>
          <b>{movie.name}</b>
        </p>
        <p>{movie.year}</p>
        <p>{movie.country}</p>
        <p>{movie.director}</p>
        <p>{movie.duration}</p>
        <p className="sinopsis">{movie.sinopsis}</p>
        <img src={movie.poster} alt={movie.name} />
      </div>
    </div>
  );
};

export default NewMovie;
