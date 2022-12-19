import { checkIfCartExists, parseCartToObject} from '../helpers';
import { useEffect, useState } from 'react';
import CartCard from '../components/cartcard';

const Cart = () => {

    let [userCart, setUserCart] = useState(null);
    let [cartChanged, setCartChanged] = useState(false);

    useEffect(() => {
        let cartExists = checkIfCartExists();
        if(cartExists) {
            setUserCart(parseCartToObject());
            console.log('cart exists, state set');
        }
    },[]);


    useEffect(() => {
        const handleStorage = () => {
            setCartChanged(true);
            setCartChanged(false);
            console.log(cartChanged);
        }
    
        window.addEventListener('storage', handleStorage())
        return () => window.removeEventListener('storage', handleStorage())
    }, []);

    return (
        <div className="cart">
            { userCart && userCart.items.map((item) => {
                return <CartCard productObject={item} />
            })}
        </div>
    )
}

export default Cart;