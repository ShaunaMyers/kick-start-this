import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { stripVTControlCharacters } from 'util';
import axios from "axios";

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit0-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "ffc7ee"
        }
    }
}

const PaymentForm = () => {
    const [successful, setSuccessful] = useState(false);
    const [donation, setDonation] = useState(null)
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [error, paymentMethod] = await stripe.createPaymentMethod({
            type: "card",
            card: elements?.getElement(CardElement)
        })

        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: donation,
                    id
                })
    
                if(Response.data.success) {
                    console.log("Your payment was successful!");
                    setSuccessful(true);
                }
    
            } catch {
                console.log(`Error message: ${error}`)
            }
        } else {
            console.log(error.message)
        }
    }


    return(
       <>
        {!successful ?
            <form onSubmit={handleSubmit}>
                <label for="donation-amount">Donation Amount</label>
                <input onChange={(e) => setDonation(e.target.value)} id="donation-amount" type="number" step="0.01" placeholder="$0" value={donation}/>
                <fieldSet>
                    <div>
                        <CardElement options={CARD_OPTIONS} />
                    </div>
                </fieldSet>
                <button>Donate</button>
            </form>
            :
            <div><h2>You have succesfully made a donation! Thank you!</h2></div>
        }
       </>
    )
}

export default PaymentForm;