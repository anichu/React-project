import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import BackDrop from './components/BackDrop';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { GlobalStyle } from './styles/GlobalStyle';
import { CartProvider } from './context/cart-conext';
import User from './components/User';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Logout from './components/Logout';
function App() {
  const [showCart, setShowCart] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [signUp, setSignUp] = useState([]);
  const [signIn, setSignIn] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <StyledApp className='App'>
          <GlobalStyle />
          {showCart && (
            <>
              <Cart
                setShowCart={setShowCart}
                showCart={showCart}
                className='showCart'
              />
              <BackDrop setShowCart={setShowCart} />
            </>
          )}
          {showUser && (
            <User
              setShowUser={setShowUser}
              showUser={showUser}
              signIn={signIn}
              setSignIn={setSignIn}
            />
          )}
          <Header
            setShowCart={setShowCart}
            setShowUser={setShowUser}
            showUser={showUser}
          />
          <Switch>
            <Route path='/' exact>
              <ProductList />
            </Route>

            <Route path='/signin'>
              <Signin setSignIn={setSignIn} signIn={signIn} signUp={signUp} />
            </Route>
            <Route path='/signup'>
              <Signup
                setSignUp={setSignUp}
                signUp={signUp}
                setSignIn={setSignIn}
              />
            </Route>

            <Route path='/logout'>
              <Logout />
            </Route>
          </Switch>
        </StyledApp>
      </BrowserRouter>
    </CartProvider>
  );
}

const StyledApp = styled.div`
  position: relative;
  overflow: hidden;
`;

export default App;
