export const getMovie = async (filter) => {
  const movies = await fetch(`http://localhost:8080/movies/${filter}`);
  const moviesToJson = await movies.json();
  return {
    ...moviesToJson,
    name: moviesToJson.name,
    sinopsis: moviesToJson.sinopsis,
  };
};
