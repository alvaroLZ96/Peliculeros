import React from "react";
const Card = ({ item }) => {
  return (
    <ul className="movieDiv">
      <h3> {item.name}</h3>
      <li>{item.year}</li>
      <li>{item.country}</li>
      <li>{item.director}</li>
      <li>{item.duration}</li>
      <li>{item.sinopsis}</li>
    </ul>
  );
};
export default Card;
