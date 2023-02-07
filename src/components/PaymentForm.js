import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import AddressForm from "./AddressForm";
import {Elements} from '@stripe/react-stripe-js';


const PaymentForm = () => {

    
 const [success, setSuccess] = useState(false);
 const stripe = useStripe();
 const elements = useElements();


 const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type:'card',
        card:elements.getElement(CardElement)
    });

    if(!error) {
        try{
            const { id } = paymentMethod;
            const response = await fetch('https://onlineshop-backend.herokuapp.com/create-payment-intent', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    paymentMethodType:'card',
                    currency:'eur',
                    amount:1900
                })
            })
        let data = await response.json();
        if(data.status === 'success') {
            // const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(data.clientSecret, {
            //     payment_method:{
            //         card:elements.getElement(CardElement),
            //         billing_details: {
            //             name:'russell driver'
            //         }
            //     }
            // })
            stripe.confirmCardPayment(data.clientSecret, {
            payment_method: {
            card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Jenny Rosen',
                },
            },
        })
        .then(function(result) {
            // Handle result.error or result.paymentIntent
            if(!result.error) {
                console.log('successfull payment for Jenny')
                console.log(result.paymentIntent);
            } else {
                console.log('there was an error for Jenny');
                console.log(result.error)
            }
        });
        }
        
        
        }catch(e) {
            console.log('error',e)
        }
    } else {
        console.log(error.message);
    }

 }


    return(
        <>
        { !success ? 
            <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement />
                    </div>
                </fieldset>
                <button>Pay</button>
            </form>
            : 
            <div>
                <h2>Your payment was successful!</h2>
            </div>
        }
        </>
    )
}

export default PaymentForm;