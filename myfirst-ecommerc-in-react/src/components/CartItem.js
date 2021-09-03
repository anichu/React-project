import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/cart-conext';

const CartItem = ({ item }) => {
  const ctx = useContext(CartContext);
  const { addCart } = ctx;
  return (
    <>
      <StyledCartItem>
        <img src={item.image} alt={item.name} />
        <div className='second-card'>
          <div>
            <h3>{item.name}</h3>
            <h4>$ {item.price}</h4>
            <h5>
              <i className='uil uil-times'></i> {item.amount}
            </h5>
          </div>
        </div>
        <div className='third-card'>
          <div>
            <i
              className='fas fa-plus'
              onClick={() => addCart({ ...item, amount: 1 })}
            ></i>
          </div>
          <div>
            <i
              className='fas fa-minus'
              onClick={() => ctx.removeCart(item.id)}
            ></i>
          </div>
          <div>
            <i
              className='fas fa-trash'
              onClick={() => ctx.deleteCart(item.id)}
            ></i>
          </div>
        </div>
      </StyledCartItem>
    </>
  );
};
const StyledCartItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;
  color: white;
  img {
    width: 10rem;
    height: 6rem;
  }
  .second-card {
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
    align-items: center;
    justify-content: space-between;
  }
  .third-card {
    i {
      font-size: 1.3rem;
      cursor: pointer;
      margin: 0rem 0.5rem 0.3rem 0rem;
      border: 1px solid whitesmoke;
      padding: 0.2rem 0.5rem 0.2rem 0.5rem;
      border-radius: 0.2rem;
      transition: 0.3s;
    }
    i:hover {
      color: #003049;
      background: whitesmoke;
    }
  }
  h3 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
  h4 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
  h5 {
    font-size: 1.2rem;
    border: 1px solid whitesmoke;
    width: 3rem;
    border-radius: 0.3rem;
  }
`;

export default CartItem;
