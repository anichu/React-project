import React, { useContext, useState } from 'react';
import { movieContext } from './MovieContext';

const AddMovie = () => {
  const [movies, setMovies, password, setPassword] = useContext(movieContext);
  // const [password, setPassword] = useContext(movieContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    setMovies((prev) => [
      ...prev,
      { name, price: `$${price}`, id: prev[prev.length - 1].id + 1 },
    ]);
  };
  return (
    <div>
      <form action=''>
        <p>{password}</p>
        <input type='text' onChange={(e) => setName(e.target.value)} />
        <input type='text' onChange={(e) => setPrice(e.target.value)} />
        <button onClick={submitHandler}>submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
