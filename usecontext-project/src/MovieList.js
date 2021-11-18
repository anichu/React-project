import React, { useContext } from 'react';
import { movieContext } from './MovieContext';
import Movie from './Movie';

const MovieList = () => {
  const [movies, setMovies] = useContext(movieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
