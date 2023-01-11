
import {useLocation, Link} from 'react-router-dom';
import Payment from './payment';

const Checkout = () => {

    const location = useLocation();
    console.log(location.state);

    return(
        <div>
            <h1>checkout</h1>
            <p>total to pay £{location.state.userCart.totalCost}</p>
            <Link to="/home">back to basket</Link>
            
            <Payment />
        </div>
    )
};

export default Checkout;