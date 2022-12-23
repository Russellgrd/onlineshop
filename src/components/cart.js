import { checkIfCartExists, parseCartToObject} from '../helpers';
import { useEffect, useState } from 'react';
import CartCard from '../components/cartcard';
import uuid from 'react-uuid';
import { removeCartItemAndReload } from '../helpers';
import cartlogo from '../images/cart.png'

const Cart = ({setUserCartChanged,userCartChanged}) => {

    let [userCart, setUserCart] = useState(null);
    let [userCartTotalCost, setUserCartTotalCost] = useState(0);
    let [userCartTotalItems, setUserCartTotalItems] = useState(0);

    useEffect(() => {
        let cartExists = checkIfCartExists();
        if(cartExists) {
            let userCart = parseCartToObject();
            setUserCart(userCart);
            console.log('cart exists, state set');
            let totalCost = 0;
            let totalItems = 0;
            console.log(userCart);
            userCart.items.forEach((item) => {
               console.log(item.price);
               totalCost += item.price;
               totalItems++;
            });
            console.log('totalcost is' ,totalCost);
            setUserCartTotalCost(totalCost);
            setUserCartTotalItems(totalItems);
        }
        setUserCartChanged(true)
    },[userCartChanged]);

    const handleDeleteCartItem = (e) => {
        let itemId = e.parentElement.dataset.cartitemid;
        console.log('item id to be removed is', itemId);
        removeCartItemAndReload(itemId);
        setUserCartChanged(true);
    }   

    return (
        <div className="cart" >
            <img className='cartlogo' src={cartlogo} />
            { userCartTotalCost &&  <div className='cart-summary'>
             <p>total cost: £{userCartTotalCost}</p>
             <p>total items: {userCartTotalItems} </p>
            </div>}
            { userCart && userCart.items.map((item) => {
                return <CartCard key={uuid()} productObject={item} handleDeleteCartItem={handleDeleteCartItem}/>
            })}
        </div>
    )
}

export default Cart;