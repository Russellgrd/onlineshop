import React from 'react';
import {AddressElement} from '@stripe/react-stripe-js';

const AddressForm = () => {
  return (
    <fieldset className="FormGroup">
      <div className="FormRow">
      <h3>Shipping</h3>
        <AddressElement options={{mode: 'shipping'}} />
        
      </div>
  </fieldset>);
};

export default AddressForm;