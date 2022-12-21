import { checkIfCartExists, parseCartToObject} from '../helpers';
import { useEffect, useState } from 'react';
import CartCard from '../components/cartcard';
import uuid from 'react-uuid';
import { removeCartItemAndReload } from '../helpers';

const Cart = ({cartChanged, setCartChanged}) => {

    let [userCart, setUserCart] = useState(null);

    useEffect(() => {
        let cartExists = checkIfCartExists();
        if(cartExists) {
            setUserCart(parseCartToObject());
            console.log('cart exists, state set');
            setCartChanged(false);
        }
    },[cartChanged]);

    const handleDeleteCartItem = (e) => {
        let itemId = e.parentElement.dataset.cartitemid;
        console.log('item id to be removed is', itemId);
        removeCartItemAndReload(itemId);
        setCartChanged(true);
    }   

    return (
        <div className="cart" >
            { userCart && userCart.items.map((item) => {
                return <CartCard key={uuid()} productObject={item} handleDeleteCartItem={handleDeleteCartItem}/>
            })}
        </div>
    )
}

export default Cart;