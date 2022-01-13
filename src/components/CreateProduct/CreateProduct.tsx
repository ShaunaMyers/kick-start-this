import { useState } from 'react';
import { addSingleProduct } from '../../apiCalls';
import { Link } from 'react-router-dom';
import { FormControl, TextField, Button } from '@material-ui/core';

interface Props {
    handleAddProduct: Function,
}

const CreateProduct = ({ handleAddProduct }: Props) => {

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [fundsGoal, setFundsGoal] = useState<string>('');
    const [singleImage, setSingleImage] = useState<string>('');
    const [images, setImages] = useState<string[]>([]);
    const [creatorName, setCreatorName] = useState<string>('');
    const [creatorEmail, setCreatorEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const validateInputs = () => {
        if (!title || !description || !fundsGoal || !images.length || !creatorName || !creatorEmail) {
            setError('Please fill out all the fields')
            setTimeout(() => setError(''), 5000)
            return;
        } 
    }

    const formatImages = () => {
        let formatted = "{"
        
        images.forEach((item, i) => {
            console.log('index', i)
            i !== images.length - 1 || i !== 0 ? formatted += item + ", "
            : formatted += item + "}";
        })
        return formatted;
    }
        
    const onAddProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        validateInputs();
        const newProduct = { title: title, description: description, funds_goal: Number(fundsGoal), funds_raised: 0, images: formatImages(), creator_name: creatorName, creator_email: creatorEmail }

        handleAddProduct(newProduct);
        // addSingleProduct(newProduct);
        setMessage('You have successfully added your product')
    }

    const handleAddImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (images.length < 4) {
            images.length ? setImages([...images, singleImage])
            : setImages([singleImage]);
            setSingleImage('');
        } else {
            setError('You have reached the max amount of photo uploads')
            setTimeout(() => setError(''), 5000)
            setSingleImage('');
        }
    }

    return (
        <>
            <FormControl>
                <TextField onChange={(e) => setCreatorName(e.target.value)} label="Full Name" color="primary" value={creatorName} focused/>
                <TextField onChange={(e) => setCreatorEmail(e.target.value)} type="email" label="Email" color="secondary" value={creatorEmail} focused />
                <TextField onChange={(e) => setTitle(e.target.value)} label="Product Title" variant="standard" color="primary" value={title} focused/>
                <TextField onChange={(e) => setDescription(e.target.value)} label="Product Description" variant="standard" color="primary" value={description} focused/>
                <TextField onChange={(e) => setFundsGoal(e.target.value)} label="Funds Needed" variant="standard" color="primary" value={fundsGoal} focused/>
                <input onChange={(e) => setSingleImage(e.target.value)} type="url" value={singleImage}/>
                <Button onClick={(e: any) => handleAddImage(e)} component="span">
                    Add Photo
                </Button>
                <Button onClick={(e) => onAddProduct(e)} variant="contained" type="submit" color="secondary">Create Product</Button>
                <Link to="/">Return to browsing products</Link>
                {error && <p>{error}</p>}
                {message && <p>{message}</p>}
            </FormControl>
        </>
    )
}

export default CreateProduct;