import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const DonationForm = () => {

    const { id, title } = useParams();
    // const location = useLocation();
    // const { title } = location.state;
    // const [productTitle, setProductTitle] = useState([]);

    // useEffect(() => {
    //     setProductTitle(title);
    // }, [])

    return (
        <h6>Title: {title}</h6>
    );
}

export default DonationForm;