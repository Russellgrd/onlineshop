import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/nav'
import Shop from './components/shop';
import Cart from './components/cart';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    

  },[])


  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Shop />
      </div>
    </BrowserRouter>
  );
}

export default App;
