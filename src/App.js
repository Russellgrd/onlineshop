import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/nav'
import Shop from './components/shop';
import Cart from './components/cart';
import { useEffect,useState } from 'react';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <Nav />
        <div className='home'>
          <Shop setCartCount={setCartCount} />
          <Cart />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
