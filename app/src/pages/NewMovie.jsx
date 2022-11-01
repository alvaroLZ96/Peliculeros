import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
/* import MoviesGallery from "../components/MoviesGallery"; */
const NewMovie = () => {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [year, setYear] = useState(0);
  const [country, setCountry] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [sinopsis, setSinopsis] = useState("");

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
    const movie = {
      name: name,
      poster: poster,
      year: year,
      country: country,
      director: director,
      duration: duration,
      sinopsis: sinopsis,
      id: uuidv4(),
    };
    console.log(uuidv4());
    postMovie(movie);
  };

  const postMovie = async (item) => {
    axios({
      method: "post",
      url: "http://localhost:8080/pelis",
      data: item,
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
            onChange={(ev) => setName(ev.target.value)}
          />

          <label htmlFor="poster">&nbsp;&nbsp;Poster:</label>
          <input
            type="text"
            name="poster"
            id="poster"
            onChange={(ev) => setPoster(ev.target.value)}
          />
          <label htmlFor="year">&nbsp;&nbsp;Año:</label>
          <input
            type="number"
            name="year"
            id="year"
            min={1900}
            onChange={(ev) => setYear(ev.target.value)}
          />
          <label htmlFor="country">&nbsp;&nbsp;País:</label>
          <input
            type="text"
            name="country"
            id="country"
            onChange={(ev) => setCountry(ev.target.value)}
          />
          <label htmlFor="director">&nbsp;&nbsp;Dirección:</label>
          <input
            type="text"
            name="director"
            id="director"
            onChange={(ev) => setDirector(ev.target.value)}
          />
          <br></br>
          <label htmlFor="duration">Duración:</label>
          <input
            type="text"
            name="duration"
            id="duration"
            onChange={(ev) => setDuration(ev.target.value)}
          />
          <label htmlFor="sinopsis">&nbsp;&nbsp;Sinopsis:</label>
          <input
            type="text"
            name="sinopsis"
            id="sinopsis"
            onChange={(ev) => setSinopsis(ev.target.value)} //METER UN TEXTAREA CON MATERIAL
          />
        </fieldset>
        <button type="submit">
          <span className="button_top"> Añadir</span>
        </button>
      </form>
      {/*  <MoviesGallery movies={movies} /> */}
    </div>
  );
};

export default NewMovie;
