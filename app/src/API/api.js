import axios from "axios";

const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const API = axios.create({
  baseURL: "http://localhost:8080/pelis",
  timeout: 6000,
  headers: APIHeaders,
});

export const getMovies = async () => {
  const { data } = await API.get();
  return data;
};
