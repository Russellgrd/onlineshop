import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../images/logo.png'
import cart from '../images/cart.png';
import Cookies from 'universal-cookie';


const Nav = () => {

    let [userloggedIn, setUserLoggedIn] = useState(false);
    let [useremail, setUserEmail] = useState('');
    const cookies = new Cookies();

    let loggedIn = cookies.get('loggedIn');
    let email = cookies.get('useremail');

    useEffect(() => {
        setUserLoggedIn(loggedIn);
        setUserEmail(email);
    },[]);

    const handleLogOff = () => {
        setUserEmail('');
        cookies.remove('Authorization');
        cookies.remove('useremail');
        cookies.remove('logginIN')
    }
        
    return(
        <div className="nav">
            <ul className="nav_listContainer">
                <li className="nav_listContainer-item">
                    <Link to="/"> Viral Aces</Link>
                </li>
                <li className="nav_listContainer-item">
                    <Link to="/about">about</Link>
                </li>
                <li className="nav_listContainer-item">
                    <Link to="/contact">contact</Link>
                </li>
                {/* <li className="nav_listContainer-item">
                { useremail ? <Link className='nav-listContainer-logoff' onClick={handleLogOff} to="#">log off</Link> : <Link to="/login">log in</Link>  }
                </li>
                <li className="nav_listContainer-item  nav_listContainer-email"> {useremail} </li> */}
            </ul>
        </div>
    )
}

export default Nav;