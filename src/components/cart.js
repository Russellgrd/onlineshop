
import { useEffect, useState } from "react";
import CartCard from "./cartcard";
const Cart = () => {
        
    let [ cart, setCart ] = useState(null);
    let [totalPrice, setTotalPrice] = useState(0);
    let [totalCount, setTotalCount] = useState(0);

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
        },[])

        useEffect(() => {
            if(cart) {
                let itemCount = 0;
                let itemCost = 0
                cart.items.forEach((item) => {
                    itemCount ++;
                    itemCost += item.price;
                })
                setTotalPrice(itemCost);
                setTotalCount(itemCount)
            }   
        },[cart]);

    return(
        <div className="cart-container">
            { totalPrice && <p className="cart-container-totalcost"> { "total £" + totalPrice } </p> }
            { totalCount && <p className="cart-container-totalcount"> { totalCount + "items in basket" } </p> }
               {/* { cart && cart.items.map((cartItem) => {
                    console.log(cartItem);
                    return <CartCard cartItem={cartItem} />
               })} */}
        </div>
    )
}

export default Cart;