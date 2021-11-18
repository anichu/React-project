import React, { useState, createContext } from 'react';
export const movieContext = createContext();

export const MovieProvider = (props) => {
  const [password, setPassword] = useState('anis');
  const [movies, setMovies] = useState([
    {
      name: 'harry potter',
      price: '$30',
      id: 1,
    },
    {
      name: 'Inception',
      price: '$10',
      id: 2,
    },
    {
      name: 'Game of thrones',
      price: '$5',
      id: 3,
    },
  ]);
  return (
    <movieContext.Provider value={[movies, setMovies, password, setPassword]}>
      {props.children}
    </movieContext.Provider>
  );
};
