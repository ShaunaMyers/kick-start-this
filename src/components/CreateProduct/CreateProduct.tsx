import { useState } from 'react';
import { addSingleProduct } from '../../apiCalls';
import { FormControl, TextField, Button } from '@material-ui/core';

const CreateProduct = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [fundsGoal, setFundsGoal] = useState(0);
    const [singleImage, setSingleImage] = useState('');
    const [images, setImages] = useState([]);
    const [creatorName, setCreatorName] = useState('');
    const [creatorEmail, setCreatorEmail] = useState('');
    const [timer, setTimer] = useState('')
    const [error, setError] = useState('');

    const validateInputs = () => {
        console.log('single image', singleImage)
        if (!title || !description || !fundsGoal || !images.length || !creatorName || !creatorEmail) {
            setError('Please fill out all the fields')
            setTimer(setTimeout(() => setError(''), 5000))
            return;
        } 
        
        // else {
        //     setError('')
        // }
    }

    const onAddProduct = (e) => {
        validateInputs();
        e.preventDefault();
        const newProduct = { title, description, funds_goal: parseInt(fundsGoal), images: images, creator_name: creatorName, creator_email: creatorEmail }
        console.log(newProduct)
        // addSingleProduct(newProduct);
    }

    const handleAddImage = (e) => {
        e.preventDefault();
        if (images.length < 4) {
            images.length ? setImages([...images, singleImage])
            : setImages([singleImage]);
            setSingleImage('');
        } else {
            setError('You have reached the max amount of photo uploads')
            setTimer(setTimeout(() => setError(''), 5000))
            setSingleImage('');
        }
    }

    return (
        <>
            <FormControl>
                <TextField onChange={(e) => setCreatorName(e.target.value)} label="Full Name" color="warning" value={creatorName} focused/>
                <TextField onChange={(e) => setCreatorEmail(e.target.value)} type="email" label="Email" color="success" value={creatorEmail} focused />
                <TextField onChange={(e) => setTitle(e.target.value)} label="Product Title" variant="standard" color="warning" value={title} focused/>
                <TextField onChange={(e) => setDescription(e.target.value)} label="Product Description" variant="standard" color="warning" value={description} focused/>
                <TextField onChange={(e) => setFundsGoal(e.target.value)} label="Funds Needed" variant="standard" color="warning" value={fundsGoal} focused/>
                <input onChange={(e) => setSingleImage(e.target.value)} type="url" value={singleImage}/>
                <Button onClick={(e) => handleAddImage(e)} variant="raised" component="span">
                    Add Photo
                </Button>
                <Button onClick={(e) => onAddProduct(e)} variant="contained" type="submit" color="seconday">Create Product</Button>
                {error && <p>{error}</p>}
            </FormControl>
        </>
    )
}

export default CreateProduct;