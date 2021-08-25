import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <div className="left-side">
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div className="right-side">
        <a href="#/cart">Cart</a>
        <a href="#/signin">SignIn</a>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #14213d;
  padding: 0rem 1rem;
  border-radius: 0.5rem;
  .right-side a {
    margin-right: 1rem;
  }
`;

export default Header;
