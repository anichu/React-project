import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/cart-conext';

const Product = ({ image, price, name, product }) => {
  const ctx = useContext(CartContext);
  // console.log('ctx', ctx);
  return (
    <StyledProduct>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className='subCard'>
        <span className='price'>$ {price}</span>
        <span>
          <i className='fas fa-heart'></i>
        </span>
        <span
          className='card'
          onClick={() => ctx.addCart({ ...product, amount: 1 })}
        >
          <i className='fas fa-cart-plus'></i>
        </span>
      </div>
    </StyledProduct>
  );
};

const StyledProduct = styled.div`
  width: 23rem;
  height: 25rem;
  flex-wrap: wrap;
  color: white;
  padding: 0.5rem;
  text-align: center;
  margin: 2rem 1rem;
  background: #003049;
  border-radius: 1.5rem;
  position: relative;
  img {
    width: 100%;
    height: 15rem;
    border-radius: 1.5rem;
    transition: 0.3s;
    cursor: pointer;
  }
  img:hover {
    transform: scale(0.98);
  }
  h3 {
    margin-top: 1rem;
  }
  .subCard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 8rem;
    .price {
      margin-left: 1rem;
    }
    .card {
      margin-right: 1rem;
    }
  }
  span {
    font-size: 1.5rem;
  }
  span i {
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  span i:hover {
    color: #386641;
  }
`;

export default Product;
