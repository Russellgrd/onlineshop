
import { Link } from 'react-router-dom';
import check from '../images/check.png'

const Complete = () => {

    const clearCart = () => {
        localStorage.removeItem('userCart');
    }

    clearCart();

    return(
        <div className="complete">
            <li className='complete-listItem'>
                <Link className='complete-listItem-btn' to="/">Back home</Link>
            </li>
            <h1>Your payment has been successfull</h1>
            <p>please check your email for full payment details</p>
            <img className='complete-check-icon' src={check} />
        </div>
    )
};

export default Complete;