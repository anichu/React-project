import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { data } from '../data/data';

const ProductList = () => {
  const products = data();
  // console.log(products);
  return (
    <StyledProductList>
      {products.map((product) => (
        <Product
          name={product.name}
          image={product.image}
          price={product.price}
          product={product}
          key={product.id}
        />
      ))}
    </StyledProductList>
  );
};

const StyledProductList = styled.div`
  min-height: 90vh;
  margin: 2rem 0rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default ProductList;
