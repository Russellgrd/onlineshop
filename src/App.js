import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav'
import Shop from './components/shop';
import Cart from './components/cart';
import { useEffect,useState } from 'react';
import About from './components/about';
import Home from './components/home';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <Nav />
          <Routes>
            <Route path="/home" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
