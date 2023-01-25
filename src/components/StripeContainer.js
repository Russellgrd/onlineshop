import React, { useEffect, useState } from "react"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import AddressForm from "./AddressForm";

const StripeContainer = () => {

    let[sP,setSP] = useState(null);

    useEffect(() => {
        const getPublishableKey = async() => {
            const resp = await fetch('http://localhost:4242/config');
            const { publishableKey } = await resp.json();
            const stripePromise = loadStripe(publishableKey);
            setSP(stripePromise);
        }
        getPublishableKey();
    },[]);

    return(
        <>
        {sP ? <Elements stripe={sP}>
            <AddressForm />
            <PaymentForm />
        </Elements>
        :
        <div>
            <p>loading..</p>
        </div>
        }
        </>
    );


}

export default StripeContainer;