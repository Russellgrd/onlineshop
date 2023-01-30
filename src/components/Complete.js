
import { Link } from 'react-router-dom';
import check from '../images/check.png'
import { useParams } from 'react-router-dom';

const Complete = () => {

//payment_intent=pi_3MVqTCFBecIziEZh1EY643cc&payment_intent_client_secret=pi_3MVqTCFBecIziEZh1EY643cc_secret_YagirPPulL6X3auZu4T7Uv9V0&redirect_status=succeeded

 

    const clearCart = async () => {

        let finalCart = localStorage.getItem('userCart');
        console.log('FINAL CART', JSON.stringify(finalCart));
        let resp = await fetch('http://localhost:4242/purchasecomplete', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:finalCart
        });
        let data = await resp.json();
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