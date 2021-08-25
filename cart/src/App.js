import './styles.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import GlobalStyle from './components/GlobalStyle';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Row>
        <Main cart={cart} setCart={setCart} />
        <Basket cart={cart} setCart={setCart} />
      </Row>
    </>
  );
};
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default App;
