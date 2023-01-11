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
import Completion from './components/completion';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/home" element={ <Home  /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/login" element={ <UserLogin /> } />
            <Route path="/createaccount" element={ <CreateAccount /> } />
            <Route path='/checkout' element={ <Checkout /> } />
            <Route path="/completion" element={ <Completion /> } />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
