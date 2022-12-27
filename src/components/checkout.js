import { parseCartToObject,checkIfCartExists } from '../helpers';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import StripeContainer from './StripeContainer';

const Checkout = () => {
    let [finalSHoppingCart, setFinalShoppingCart] = useState(null);
    
    useEffect(() => {
        if(checkIfCartExists()) {
            setFinalShoppingCart(parseCartToObject());
        }
    },[]);

    const navigate = useNavigate()

    const handleAmendBasket = () => {
        navigate('/home');
    }   

    
     /*
        {
            item:[]
            totalCost:0
        }
     */

    return (
        <div className="checkout">
            <div className='checkout-products-container'>
                <div className='checkout-products-container-headings'>
                    <h3>Basket summary</h3>
                    { finalSHoppingCart && <p> {finalSHoppingCart.totalCost} </p> }
                    <button className='checkout-products-container-amend-button' onClick={handleAmendBasket}>Amend basket</button>
                </div>          
                <div className='checkout-basket-container'>
                { finalSHoppingCart && finalSHoppingCart.items.map((item) => (
                    <div className='checkout-basket-item'>
                            <h4>{item.name}</h4>
                            <p>{item.price}</p>
                            <img src={item.filename} />
                    </div>
                ))}
                </div>
            </div>
            <div className='checkout-payment-container'>
               <StripeContainer />
            </div>
        </div>
    )
};

export default Checkout;