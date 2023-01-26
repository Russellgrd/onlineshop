import { useEffect, useState } from 'react';
import {useLocation, Link} from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import {AddressElement} from '@stripe/react-stripe-js';



const Checkout = () => {

    const location = useLocation();

    const stripePromise = loadStripe('pk_test_51Ltxe2FBecIziEZh9jRfsXhXrTjjwc6BSYWGgsDcZNXQO0JswBjb0QFo5u5H6OfddapZN0xr6DNOTs2UsDLkvMuz00ZWIq892R');
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:4242/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: [location.state.userCart], amount:location.state.userCart.totalCost }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, []);

      const appearance = {
        theme: 'stripe',
      };

      const options = {
        clientSecret,
        appearance,
      };

    return(
        <div className='checkout'>
            <h1 className='checkout-heading'>checkout</h1>
            <p>total to pay £{location.state.userCart.totalCost}</p>
            <Link className='checkout-btn' to="/">back to basket</Link>
            {clientSecret && (
                 <Elements options={options} stripe={stripePromise}>
                    <AddressElement options={{mode: 'shipping'}} />
                    <CheckoutForm />
               </Elements>
            )}
        </div>
    )
};

export default Checkout;