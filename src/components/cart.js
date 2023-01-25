import { checkIfCartExists, parseCartToObject} from '../helpers';
import { useEffect, useState } from 'react';
import CartCard from '../components/cartcard';
import uuid from 'react-uuid';
import { removeCartItemAndReload } from '../helpers';
import cartlogo from '../images/cart.png'
import { createSearchParams, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';



const Cart = ({setUserCartChanged,userCartChanged}) => {

    let [userCart, setUserCart] = useState(null);
    let [userCartTotalCost, setUserCartTotalCost] = useState(0);
    let [userCartTotalItems, setUserCartTotalItems] = useState(0);

    let cookies = new Cookies();


    useEffect(() => {
        let cartExists = checkIfCartExists();
        if(cartExists) {
            let userCart = parseCartToObject();
            setUserCart(userCart);
            let totalCost = 0;
            let totalItems = 0;
            userCart.items.forEach((item) => {
               totalCost += item.price;
               totalItems++;
            });
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
        let useremail = cookies.get('useremail');
            if(!useremail) {
                navigate('/login');
            } else {
                userCart.orderId = uuid();
                userCart.date = new Date().toLocaleDateString();
                userCart.time = new Date().toLocaleTimeString();
                localStorage.setItem('userCart', JSON.stringify(userCart));
                navigate('/checkout',{state:{userCart}});
            }
        }
    

    return (
            <div className="cart" >
                <div className='cart-logo-and-count-box'>
                    <img className='cartlogo' src={cartlogo} />
                    <p className='cartlogo-count'> {userCartTotalItems}</p>
                </div>
                { userCartTotalItems && <button onClick={handleCheckout} className='cart-checkout-button'>proceed to payment</button>}

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