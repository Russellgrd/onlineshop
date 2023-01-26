import { Link } from "react-router-dom";

const Footer = () => {

    return(
        <div className="footer">
            <h4> Viral Aces &copy; { new Date().getFullYear() } </h4>
            <li className="footer-btn">
                <Link to="about">about</Link>
            </li>
        </div>
    )
};

export default Footer;
