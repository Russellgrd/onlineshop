
import { useEffect, useState } from "react";
import CartCard from "./cartcard";
const Cart = () => {
        
    let [ cart, setCart ] = useState(null);
    let [ cartSummary, setCartSummary ] = useState(null);
    let [ totalCost, setTotalCost ] = useState(0);
    let [itemCount, setItemCount] = useState(0);

        useEffect(() => {
            let localStorageCart = localStorage.getItem('userCart');
            let localCartObject;
            if(localStorageCart) {
                localCartObject = JSON.parse(localStorageCart);
                setCart(localCartObject);
            } else {
                localCartObject = null;
                setCart(localCartObject);
            }
            if(cart) {
                let itemCount = 0;
                let itemCost = 0
                cart.items.forEach((item) => {
                    itemCount ++;
                    itemCost += item.price;
                })
                setTotalCost(itemCost);
                setItemCount(itemCount);
            }   
        },[cart])



    return(
        <div className="cart-container">
            <p className="cart-container-totalprice">{"£" + totalCost }</p>
            <p className="cart-container-totalcount"> { itemCount + " items in basket" } </p>

               {/* { cart && cart.items.map((cartItem) => {
                    console.log(cartItem);
                    return <CartCard cartItem={cartItem} />
               })} */}
        </div>
    )
}

export default Cart;