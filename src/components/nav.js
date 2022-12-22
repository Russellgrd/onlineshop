import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import cart from '../images/cart.png';

const Nav = () => {
    return(
        <div className="nav">
            <ul className="nav_listContainer">
                <li className="nav_listContainer-item">
                    <Link to="/home"> <img className="logo" src={logo} alt=""/> </Link>
                </li>
                <li className="nav_listContainer-item">
                    <Link to="#">coming soon</Link>
                </li>
                <li className="nav_listContainer-item">
                    <Link to="/about">about</Link>
                </li>
                <li className="nav_listContainer-item">
                    <Link to="/cart"> <img className="logo" src={cart} alt="shopping cart"/> </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;