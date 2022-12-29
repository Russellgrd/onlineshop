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
                    <Link to="/about">about</Link>
                </li>
                <li className="nav_listContainer-item">
                    <Link to="#">contact</Link>
                </li>
                <li className="nav_listContainer-item">
                    <Link to="/login">user login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;