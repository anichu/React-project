import React from 'react';

const Movie = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h5>{price}</h5>
    </div>
  );
};

export default Movie;
