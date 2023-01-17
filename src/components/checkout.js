
import {useLocation, Link} from 'react-router-dom';
import Payment from './payment';

const Checkout = () => {

    const location = useLocation();
    console.log(location.state);

    return(
        <div>
            <h1>checkout</h1>
            <p>total to pay £{location.state.userCart.totalCost}</p>
            <Link to="/">back to basket</Link>
            <Payment userCartDetails={location.state.userCart} />
            
        </div>
    )
};

export default Checkout;