import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const Product = ({ product, products, cart, setCart }) => {
  // console.log(product);
  const addCartHandler = (product) => {
    const dbProduct = cart.findIndex((p) => p.name === product.name);
    if (dbProduct !== -1) {
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };
  console.log(cart);
  return (
    <StyledProduct>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <h4>${product.price}</h4>
      <button onClick={() => addCartHandler(product)}>Add To Cart</button>
    </StyledProduct>
  );
};

const StyledProduct = styled.div`
  color: white;
  padding: 1rem;
  h3 {
    font-size: 1.4rem;
  }
  h4 {
    margin: 0.2rem 0rem;
    font-size: 1.3rem;
  }
  button {
    color: white;
    display: block;
    cursor: pointer;
    width: 100%;
    font-size: 1.4rem;
    background: #fa8900;
    border: 2px solid #fa8900;
    border-radius: 1rem;
    transition: 0.2s;
    padding: 0.3rem 0rem;
    overflow: hidden;
  }

  button:hover {
    border: 2px solid black;
    overflow: hidden;
  }
`;

export default Product;
