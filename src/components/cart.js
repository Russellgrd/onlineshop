
import { useEffect, useState } from "react";
const Cart = () => {

        let [ cart, SetCart ] = useState(null);

        useEffect(() => {
            let localStorageCart = localStorage.getItem('userCart');
            let localCartObject;
            if(localStorageCart) {
                localCartObject = JSON.parse(localStorageCart);
                SetCart(localCartObject);
            } else {
                localCartObject = null;
            }
        },[])

    return(
        <div className="cart-container">
            <p className="cart-container-totalprice"></p>
        </div>
    )
}

export default Cart;