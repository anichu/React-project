import React, { useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { Data } from './Data';
const Main = ({ cart, setCart }) => {
  const products = Data();
  // console.log(products);
  return (
    <StyledMain>
      <h1>Products</h1>
      <hr />
      <div className='product-list'>
        {products.map((pro) => (
          <Product
            cart={cart}
            setCart={setCart}
            products={products}
            product={pro}
            key={pro.id}
          />
        ))}
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  flex: 3 1 40rem;
  background: #14213d;
  text-align: left;
  margin: 2rem 0rem;
  margin-right: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  max-height: 90vh;
  h1 {
    color: white;
  }
  .product-list {
    display: flex;
    justify-content: space-between;
  }
`;

export default Main;
