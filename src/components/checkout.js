import { useEffect, useState } from 'react';
import {useLocation, Link} from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import {AddressElement} from '@stripe/react-stripe-js';
import { parseCartToObject } from '../helpers';




const Checkout = () => { 
  
    const [clientSecret, setClientSecret] = useState("");
    const [loaded, setLoaded] = useState(false);
    const location = useLocation();
    const [pubKey, setPubKey] = useState(null);
    const stripePromise = loadStripe('pk_test_51Ltxe2FBecIziEZh9jRfsXhXrTjjwc6BSYWGgsDcZNXQO0JswBjb0QFo5u5H6OfddapZN0xr6DNOTs2UsDLkvMuz00ZWIq892R');


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://onlineshop-backend.herokuapp.com/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            amount:location.state.userCart.totalCost
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setClientSecret(data.clientSecret);
          })
          .catch((err) => {
            console.log('Russell error', err);
          })
      }, []);

    return(
        <div className='checkout'>
            <h1 className='checkout-heading'>checkout</h1>
            <p>total to pay £{location.state.userCart.totalCost}</p>
            <Link className='checkout-btn' to="/">back to basket</Link>
            {clientSecret && (

              <Elements 
              options={{appearance:{theme:'stripe'},clientSecret:clientSecret}} stripe={stripePromise}>
                {  // SetTimeout used to fix a bug as onChange event on AddressElement does not fire unelss some state changes
                setTimeout(() => {
                  setLoaded(true);
                },500)
                }
                    <AddressElement options={{mode: 'shipping'}} 
                    onChange={(event) => {  
                      console.log('ADDRESS', event.value.address);
                      if (event.complete) {
                        let finalCart = parseCartToObject();
                        finalCart.username = event.value.name;
                        finalCart.address = event.value.address;
                        localStorage.setItem('userCart',JSON.stringify(finalCart));
                        console.log('address and name added to cart'); 
                      }
                    }}
                    />
                    <CheckoutForm />
               </Elements>
            )}
        </div>
    )
};

export default Checkout;