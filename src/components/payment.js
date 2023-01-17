import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "./checkoutForm";
import { Elements } from "@stripe/react-stripe-js";
import AddressForm from "./addressform";


const Payment = ({userCartDetails}) => {

    const [ stripePromise, setStripePromise ] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() =>{
        fetch('http://localhost:4242/config')
        .then(resp => resp.json())
        .then((data) => {
            setStripePromise(loadStripe(data.publishableKey));
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);

    useEffect(() => {
        fetch('http://localhost:4242/create-payment-intent', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({userCartDetails: userCartDetails})
        })
        .then(resp => resp.json())
        .then((data) => {
            setClientSecret(data.clientSecret);
        })
    },[])

    return(
        <div>
           <h1>React stripe and payment element</h1> 
       { stripePromise && clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
            <AddressForm />
            <CheckoutForm />
           </Elements>
       )}
        </div>
    )
};

export default Payment;