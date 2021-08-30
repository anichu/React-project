import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/cart-conext';
import './Cart.css';
import CartItem from './CartItem';

const Cart = ({ setShowCart, showCart }) => {
  const ctx = useContext(CartContext);

  return (
    <>
      <StyledCart
        className={`${showCart && 'showCart '} ${!showCart && 'hideCart'}`}
      >
        <span onClick={() => setShowCart(false)}>
          <i className='uil uil-times'></i>
        </span>
        <h2>
          Your Cart ( <span>{ctx.quantity}</span> )
        </h2>
        <hr />
        {ctx.items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}

        <hr />
        <h2 className='total-amount'>
          <span>
            {ctx.totalAmount
              ? `Total Amount: $ ${ctx.totalAmount} `
              : 'You have no item to cart'}
          </span>
        </h2>
      </StyledCart>
    </>
  );
};

const StyledCart = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;
  width: 30rem;
  height: 100%;
  background: #003049;
  z-index: 30;
  border-top-right-radius: 0.5rem;
  h2 {
    text-align: left;
    margin: 1rem 0rem 0.2rem 0.5rem;
    color: white;
    font-size: 1.5rem;
  }
  hr {
    color: white;
  }
  span i {
    font-size: 2rem;
    color: white;
    cursor: pointer;
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
  }
  .total-amount span {
    font-size: 1.6rem;
    border: 1px solid whitesmoke;
    padding: 0.2rem;
    border-radius: 0.3rem;
  }
`;

export default Cart;
