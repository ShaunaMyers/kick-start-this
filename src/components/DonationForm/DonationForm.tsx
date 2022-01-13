import PaymentForm from '../PaymentForm/PaymentForm';
import { useParams } from 'react-router-dom';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const DonationForm = ({ handleUpdateFundsRaised }) => {

    const { id, title } = useParams();

    const PUBLIC_KEY= "pk_test_51KHG52GKDS6iRdpblhIx1DXqNDKYFMHMyDzZbnv8ZSZBsLQ8E9kclzy3B2kWgGs6XQ7CmAzRnq2MwI4d9rnncZGf00VDPjSx92";

    const stripeTestPromise = loadStripe(PUBLIC_KEY);

    return (
        <>
            <Typography variant="h4">Donation Summary</Typography>
            <Typography variant="h6">We thank you for choosing to fund {title}!</Typography>
            <Divider />
            <Elements stripe={stripeTestPromise}>
                <PaymentForm handleUpdateFundsRaised={handleUpdateFundsRaised} id={id} />
            </Elements>
        </>
    );
}

export default DonationForm;