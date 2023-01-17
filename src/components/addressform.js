import { AddressElement } from "@stripe/react-stripe-js";
import { parseCartToObject } from '../helpers.js';

const AddressForm = () => {

    return(
        <form>
            <h3>Shipping</h3>
            <AddressElement  options={{mode:'shipping'}}  onChange={(e) => {
                if(e.complete) {
                    const address = e.value.address;
                    let userCart = localStorage.getItem('userCart');
                    if(userCart) {
                        console.log('yo');
                        let objectCart = parseCartToObject(userCart);
                        objectCart.shippingAddress = address;
                        localStorage.setItem('userCart', JSON.stringify(objectCart));
                        console.log(JSON.parse(localStorage.getItem('userCart')));
                    }
                }
            }}/>
        </form>
    )
};

export default AddressForm;