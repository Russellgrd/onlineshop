import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav'
import Shop from './components/shop';
import Cart from './components/cart';
import { useEffect,useState } from 'react';
import About from './components/about';
import Home from './components/home';
import Checkout from './components/checkout';
import UserLogin from './components/userlogin';
import CreateAccount from './components/createaccount';
import Card from './components/card';
import Complete from './components/Complete';
import ProductItem from './components/ProductItem';
import Contact from './components/Contact';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={ <Home  /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/login" element={ <UserLogin /> } />
            <Route path="/createaccount" element={ <CreateAccount /> } />
            <Route path='/checkout' element={ <Checkout /> } />
            <Route path='/complete' element={ <Complete /> } />
            <Route path='/productitem' element={ <ProductItem /> } />
            <Route path="/contact" element={ <Contact /> } />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
