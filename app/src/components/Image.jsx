import React from "react";
const Image = ({ source, alternative, size }) => {
  return (
    <figure style={{ width: size }} className="image-container">
      <img src={source} alt={alternative} />
    </figure>
  );
};

export default Image;
