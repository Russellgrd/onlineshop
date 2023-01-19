import { useState } from "react"
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(null);
    

    const handleSubmit = async (e) => {
        e.preventDefault();     
        

        setIsProcessing(true);
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams:{
                return_url: `${window.location.origin}/completion`,
            }
        });

        if (error) {
            setMessage(error.message);
            console.log(error);
        };
        setIsProcessing(false);
    }

    return(
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={isProcessing} id="submit"> 
                <span id="button-text">
                    {isProcessing ? "Processing...." : "Pay now"}
                </span>
            </button>
        { message && <div id="payment-message">{message}</div> }
        </form>
    )

}

export default CheckoutForm;