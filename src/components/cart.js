import { checkIfCartExists, parseCartToObject} from '../helpers';
import { useEffect, useState } from 'react';
import CartCard from '../components/cartcard';
import uuid from 'react-uuid';



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

    return (
        <div className="cart">
            { userCart && userCart.items.map((item) => {
                return <CartCard productObject={item} key={uuid()}/>
            })}
        </div>
    )
}

export default Cart;