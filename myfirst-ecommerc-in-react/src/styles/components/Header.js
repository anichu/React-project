import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../context/cart-conext';

const Header = ({ setShowCart, setShowUser, showUser }) => {
  const ctx = useContext(CartContext);
  return (
    <StyledHeader>
      <StyledNav>
        <div className='logo'>
          <Link to='/'>E-com</Link>
        </div>
        <ul className='nav-link'>
          <li>
            <i
              class='fas fa-user-circle'
              onClick={() =>
                showUser ? setShowUser(false) : setShowUser(true)
              }
            ></i>
          </li>
          <li>
            <i class='fas fa-heart'></i>
            <span>1</span>
          </li>
          <li onClick={() => setShowCart(true)}>
            <i class='fas fa-cart-plus'></i>
            {ctx.quantity ? <span>{ctx.quantity}</span> : ''}
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  color: white;
  min-height: 10vh;
  background: #003049;
  border: 2px solid #003049;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const StyledNav = styled.nav`
  margin: 0rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: inherit;
  .nav-link {
    display: flex;
    align-items: center;
    li {
      margin: 0rem 1rem;
      position: relative;
    }
    li i {
      font-size: 2rem;
      padding: 0rem 1rem;
      cursor: pointer;
    }
    span {
      display: block;
      cursor: pointer;
      font-size: 1rem;
      position: absolute;
      color: white;
      top: 0rem;
      right: -0.5rem;
      background: #386641;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.3rem;
      text-align: center;
      z-index: 2;
    }
  }
`;

export default Header;
