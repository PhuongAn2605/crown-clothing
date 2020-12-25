import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment successful');
}
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 10;
    const publishableKey = 'pk_test_51I1nGXC4OS5qJYzeu9sLccH7sLu1k53jvyjU1d0y6I2NfuWhzo4oeEjX53zpCUaXHYMF1m6DhkBcuauESRKhIipt00zt7Wr8E9';

    return (
        <StripeCheckout 
        label='Pay Now'
        name='CROWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://stripe.com/img/documentation/checkout/marketplace.png'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;