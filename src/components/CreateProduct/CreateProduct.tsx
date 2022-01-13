import { useState } from 'react';
import { addSingleProduct } from '../../apiCalls';
import { FormControl, TextField, Button } from '@material-ui/core';

const CreateProduct = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [fundsGoal, setFundsGoal] = useState('');
    const [images, setImages] = useState([]);
    const [creatorName, setCreatorName] = useState('');
    const [creatorEmail, setCreatorEmail] = useState('');

    const onAddToProducts = (e) => {
        e.preventDefault();
        addSingleProduct()
    }

    return (
        <>
            <FormControl>
                <TextField onChange={(e) => setCreatorName(e.target.value)} label="Full Name" color="warning" value={creatorName} focused/>
                <TextField onChange={(e) => setCreatorEmail(e.target.value)} label="Email" color="success" value={creatorName} focused />
                <TextField onChange={(e) => setTitle(e.target.value)} label="Product Title" variant="standard" color="warning" value={title} focused/>
                <TextField onChange={(e) => setDescription(e.target.value)} label="Product Description" variant="standard" color="warning" value={description} focused/>
                <TextField onChange={(e) => setFundsGoal(e.target.value)} label="Funds Needed" variant="standard" color="warning" value={fundsGoal} focused/>
                <input accept="image/*" style={{ display: 'none' }} id="raised-button-file" multiple type="file" />
                <label htmlFor="raised-button-file">
                <Button variant="raised" component="span">
                    Upload
                </Button>
                </label> 
                <Button onClick={(e) => onAddToProduct(e)} variant="contained" type="submit" color="seconday">Create Product</Button>
            </FormControl>
        </>
    )
}

export default CreateProduct;