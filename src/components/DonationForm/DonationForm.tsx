import { useParams } from 'react-router-dom';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const DonationForm = () => {

    const { id, title } = useParams();

    const PUBLIC_KEY= "pk_test_51KHG52GKDS6iRdpblhIx1DXqNDKYFMHMyDzZbnv8ZSZBsLQ8E9kclzy3B2kWgGs6XQ7CmAzRnq2MwI4d9rnncZGf00VDPjSx92";

    const stripeTestPromis = loadStripe(PUBLIC_KEY);

    return (
        <>
            <Typography variant="h4">Donation Summary</Typography>
            <Typography variant="h6">We thank you for choosing to fund {title}!</Typography>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment Method</Typography>
        </>
    );
}

export default DonationForm;