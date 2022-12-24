import { checkIfCartExists, parseCartToObject} from '../helpers';
import { useEffect, useState } from 'react';
import CartCard from '../components/cartcard';
import uuid from 'react-uuid';
import { removeCartItemAndReload } from '../helpers';
import cartlogo from '../images/cart.png'
import { useNavigate } from 'react-router-dom';

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
        removeCartItemAndReload(itemId);
        setUserCartChanged(true);
    }   

    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate('/checkout');
    }

    return (
        <div className="cart" >
            <div className='cart-logo-and-count-box'>
                <img className='cartlogo' src={cartlogo} />
                <p className='cartlogo-count'>{userCartTotalItems}</p>
                { userCartTotalItems && <button onClick={handleCheckout} className='cart-checkout-button'>checkout</button>}
            </div>
            { userCartTotalCost &&  <div className='cart-summary'>
             <p>total cost: £{userCartTotalCost}</p>
            </div>}
            { userCart && userCart.items.map((item) => {
                return <CartCard key={uuid()} productObject={item} handleDeleteCartItem={handleDeleteCartItem}/>
            })}
        </div>
    )
}

export default Cart;