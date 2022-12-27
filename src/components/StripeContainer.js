import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

function StripeContainer() {

    const PUBLIC_KEY = "pk_test_51Ltxe2FBecIziEZh9jRfsXhXrTjjwc6BSYWGgsDcZNXQO0JswBjb0QFo5u5H6OfddapZN0xr6DNOTs2UsDLkvMuz00ZWIq892R";
    const stripesTestPromise = loadStripe(PUBLIC_KEY);

    return(
        <Elements stripe={stripesTestPromise}>
            <PaymentForm />
        </Elements>
        )
};

export default StripeContainer;