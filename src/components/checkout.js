import { parseCartToObject,checkIfCartExists } from '../helpers';
import { useEffect, useState } from 'react';

const Checkout = () => {
    let [finalSHoppingCart, setFinalShoppingCart] = useState(null);
    
    useEffect(() => {
        if(checkIfCartExists()) {
            setFinalShoppingCart(parseCartToObject());
        }
    },[]);

    
     /*
        {
            item:[]
            totalCost:0
        }
     */

    return (
        <div className="checkout">
            <h1>checkout component</h1>
            <p>basket</p>
            { finalSHoppingCart && <p> {finalSHoppingCart.totalCost} </p> }
            { finalSHoppingCart && finalSHoppingCart.items.map((item) => (
               <div className='checkout-bsaket-item'>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                    <img src={item.filename} />
               </div>
            ))}
        </div>
    )
};

export default Checkout;