
// import { CardElement, useElements, useStripe, AddressElement } from '@stripe/react-stripe-js';
// import StatusMessages, { useMessages } from './statusMessages';
// import AddressForm from './AddressForm'


// const Card = () => {

//     const elements = useElements();
//     const stripe = useStripe();
//     const [messages, addMessage] = useMessages()

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//              if(!stripe || !elements){
//                 addMessage('Stripe.js has not yet loaded.');
//             return;
//         }
//         addMessage('Creating payment intent...');
//         //create payment intent
//         const {error:backendError, clientSecret } = await fetch('http://localhost:4242/create-payment-intent', {
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 paymentMethodType:'card',
//                 currency:'eur'
//             })
//         })
//         .then(r => {
//             return r.json()
//         });

//         if(backendError) {
//             addMessage(backendError.message);
//             return;
//         }

//         addMessage('Client secret returned');
//         //confirm the payment on the client
//         addMessage('Payment intent created');

//         const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
//             payment_method:{
//                 card:elements.getElement(CardElement),
//                 billing_details: {
//                     name:'russell driver'
//                 }
//             }
//         })

//         if (stripeError) {
//             // Show error to your customer (e.g., insufficient funds)
//             addMessage(stripeError.message);
//             return;
//           }

//         addMessage(`PaymentIntent (${paymentIntent.id}): (${paymentIntent.status})`)
//     }

//     return(
//         <>   
//             <h1>Card</h1>
//             <AddressElement>
//             <AddressForm />
//             </AddressElement>
//             <form id="payment-form" onSubmit={handleSubmit}>
//             <label htmlFor='card-element'>Card</label>
//                 <CardElement id="card-element"/>
//                 <button>Pay</button>
//             </form>
//             <div className='statusMessages'>
//                 <StatusMessages messages={messages} />
//             </div>
//         </>
//     )

// }

// export default Card;