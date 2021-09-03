import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './User.css';
const User = ({ setShowUser, showUser, signIn, setSignIn }) => {
  return (
    <StyledUser className='userTransition'>
      {!signIn && (
        <>
          <li>
            <Link to='/signin' onClick={() => setShowUser(false)}>
              Signin
            </Link>
          </li>
          <li>
            <Link to='/signup' onClick={() => setShowUser(false)}>
              Signup
            </Link>
          </li>
        </>
      )}
      {signIn && (
        <li>
          <Link
            to='/'
            onClick={() => {
              setShowUser(false);
              setSignIn(false);
            }}
          >
            Logout
          </Link>
        </li>
      )}
    </StyledUser>
  );
};

const StyledUser = styled.ul`
  width: 8rem;
  height: 10rem;
  position: absolute;
  top: 4.2rem;
  right: 12rem;
  border-top: 3px solid whitesmoke;
  z-index: 10;
  background: hsl(201, 100%, 14%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  transition: 0.3s ease-in;
  overflow: hidden;

  li a {
    color: whitesmoke;
    font-size: 1.3rem;
  }
  li a:hover {
    color: hsl(201, 50%, 70%);
  }
  li {
    padding: 0.3rem 0rem;
  }
`;

export default User;
