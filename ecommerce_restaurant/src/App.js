import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Hero from './components/Hero/index';
import Products from './components/products';
import { productData } from './components/products/data';
import { productDataTwo } from './components/products/data';
import Feature from './components/feature';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for you' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
