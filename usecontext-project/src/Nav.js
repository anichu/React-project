import React, { useContext } from 'react';
import { movieContext } from './MovieContext';
import './Nav.css';

const Nav = () => {
  const [movies, setMovies] = useContext(movieContext);
  return (
    <div className='nav'>
      <h3>Anis</h3>
      <p>List of Movies: 0{movies.length}</p>
    </div>
  );
};

export default Nav;
