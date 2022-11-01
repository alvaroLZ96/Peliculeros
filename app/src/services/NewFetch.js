export const getMovie = async (filter) => {
  const movies = await fetch(`http://localhost:8080/pelis?name=${filter}`);
  const moviesToJson = await movies.json();
  console.log(moviesToJson[0].name);
  console.log(moviesToJson);
  return {
    ...moviesToJson[0],
    /* name: moviesToJson[0].name,
    poster: moviesToJson[0].poster, //QUE HACE ESTO??
    id: moviesToJson[0].id, */
  };
};
