import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
    // iconStyle:"solid",
    // style: {
    //     base: {
    //         iconColor:"#c4f0ff",
    //         color:"#fff",
    //         fontWeight:500,
    //         fontFamily: "Roboto,Open Sans, Segoe UI, sans-serif",
    //         fontSize:"16px",
    //         fontSmoothing:"antialiased",
    //         ":-webkit-autofill":{ color: "#fce883" },
    //         "::placeholder":{ color: "#87bbfd" } 
    //     },
    //     invalid:{
    //         iconColor:"#ffc7ee",
    //         color:"#ffc7ee"
    //     }
    // }
}


function PaymentForm({finalSHoppingCart}) {

    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements  = useElements();

    const handleSubmit  = async (e) => {
        e.preventDefault();

        if(!stripe && !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type:"card",
            card: elements.getElement(CardElement)
        })

        if(!error) {
            try {
                const { id } = paymentMethod;
                const responseObj = await fetch("http://localhost:4242/create-checkout-session", {
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify({
                        amount:finalSHoppingCart.totalCost,
                        id:id
                    })
                })
                let responseData = await responseObj.json();
                if(responseData.data.success){
                    console.log('successful payment ');
                    setSuccess(true);
                }
            } catch(err) {
                console.log("Error", err);
            }
        } else {
            console.log(error.message);
        }
    }



    return (
       <>
        {!success ?
        
            <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement options={CARD_OPTIONS}/>
                    </div>
                </fieldset>
                <button>Pay</button>
            </form>
            : 
            <div>
                <h2>You Just bought a new product!</h2>
            </div>           
        } 
       </>
    )
}

export default PaymentForm;