import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../images/logo.png'
import cart from '../images/cart.png';
import Cookies from 'universal-cookie';


const Nav = () => {

    let [userloggedIn, setUserLoggedIn] = useState(false);
    const cookies = new Cookies();

    useEffect(() => {
        let loggedIn = cookies.get('loggedIn');
        setUserLoggedIn(loggedIn);
    },[]);

    const handleLogOff = () => {
        cookies.set('loggedIn',false);
        setUserLoggedIn(false);
        cookies.set("Authorization", 0, {
            path: "/",
            maxAge: 1
        });
        cookies.set("useremail", 0, {
            path: "/",
            maxAge: 1
        });
    }
        
    return(
        <div className="nav">
            <ul className="nav_listContainer">
                <li className="nav_listContainer-item">
                    <Link to="/home"> <img className="logo" src={logo} alt=""/> </Link>
                </li>
                <li className="nav_listContainer-item">
                    <Link to="/about">about</Link>
                </li>
                <li className="nav_listContainer-item">
                    <Link to="/contact">contact</Link>
                </li>
                
                { userloggedIn ? <Link onClick={handleLogOff} to="#">log off</Link> : <Link to="/login">log in</Link>  }

            </ul>
        </div>
    )
}

export default Nav;