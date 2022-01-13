import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { stripVTControlCharacters } from 'util';
import axios from "axios";


const PaymentForm = () => {
    const [succesful, setSuccessful] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [error, paymentMethod] = await stripe.createPaymentMethod({
            type: "card",
            card: elements?.getElement(CardElement)
        })
    }

    if (!error) {
        try {
            const { id } = paymentMethod;
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 1000,
                id
            })
        } catch {
            if(Response.data.success) {
                console.log("Your payment was successful!");
                setSuccessful(true);
            }
        }
    }

    return(
        <div>

        </div>
    )
}

export default PaymentForm;