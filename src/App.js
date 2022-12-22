import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/nav'
import Shop from './components/shop';
import Cart from './components/cart';
import { useEffect,useState } from 'react';


function App() {

  

  const [cartChanged, setCartChanged] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
      <Nav />
        <div className='home'>
          <Shop setCartChanged={setCartChanged} cartChanged={cartChanged}/>
          <Cart setCartChanged={setCartChanged} cartChanged={cartChanged} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
