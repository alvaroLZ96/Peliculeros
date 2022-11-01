export const getMovie = async (filter) => {
  const movies = await fetch(`http://localhost:8080/pelis?name=${filter}`);
  const moviesToJson = await movies.json();
  return {
    ...moviesToJson[0],
    /* name: moviesToJson[0].name,
    poster: moviesToJson[0].poster,
    id: moviesToJson[0].id, */
  };
};
