import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Basket = ({ cart, setCart }) => {
  const plusHandler = (pr) => {
    const newCart = cart.map((el) => {
      return el.name === pr.name ? { ...el, qty: el.qty + 1 } : el;
    });
    setCart(newCart);
  };

  const minusHandler = (pr) => {
    let newCart = cart.map((el, index) => {
      return el.name === pr.name
        ? { ...el, qty: el.qty === 0 ? 0 : el.qty - 1 }
        : el;
    });
    let newPr = newCart.filter((el) => el.qty !== 0);

    setCart(newPr);
  };
  let total = 0;
  let qty = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].qty * cart[i].price;
    qty = qty + cart[i].qty;
  }

  // console.log(total);
  return (
    <StyledBasket>
      <h1>Cart Items</h1>
      <hr />
      {cart &&
        cart.map((pr) =>
          pr.qty ? (
            <StyledCart key={pr.id}>
              <img src={pr.image} alt={pr.name} />
              <div>
                <h4>Name: {pr.name}</h4>
                <h5>Price: ${pr.price}</h5>
                <h5>Quantity: {pr.qty}</h5>
              </div>
              <div>
                <button onClick={() => plusHandler(pr)}>➕</button>
                <button onClick={() => minusHandler(pr)}>➖</button>
              </div>
            </StyledCart>
          ) : (
            ''
          )
        )}
      {cart.length === 0 ? (
        <h1>No-items</h1>
      ) : (
        <div className='total-part'>
          <h2>Total-items:{qty}</h2>
          <h2>Total-price: ${total}</h2>
        </div>
      )}
    </StyledBasket>
  );
};

const StyledBasket = styled.div`
  flex: 1 1 20rem;
  background: #14213d;
  text-align: left;
  margin: 2rem 0rem;
  padding: 1rem;
  border-radius: 0.5rem;
  color: white;
  min-height: 40vh;
  position: relative;
  .total-part {
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 1.2rem;
      margin-right: 1rem;
      background-color: rgb(250, 137, 0);
      border: 2px solid black;
      padding: 0rem 0.5rem;
      border-radius: 0.3rem;
    }
  }
`;
const StyledCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  img {
    width: 30%;
  }
  h4 {
    font-size: 1rem;
  }
  h5 {
    font-size: 1.1rem;
  }
  button {
    cursor: pointer;
    font-size: 1.2rem;
    margin: 0rem 0.5rem;
  }
`;

export default Basket;
