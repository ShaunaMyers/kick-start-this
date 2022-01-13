import { FormControl, TextField, Button } from '@material-ui/core';

const CreateProduct = () => {
    return (
        <>
            <FormControl>
                <TextField label="Full Name" color="warning" focused/>
                <TextField label="Email" color="success" focused />
                <TextField label="Product Title" variant="standard" color="warning" focused/>
                <TextField label="Product Description" variant="standard" color="warning" focused/>
                <TextField label="Funds Needed" variant="standard" color="warning" focused/>
                <TextField label="Product Title" variant="standard" color="warning" focused/>
                <input accept="image/*" style={{ display: 'none' }} id="raised-button-file" multiple type="file" />
                <label htmlFor="raised-button-file">
                <Button variant="raised" component="span">
                    Upload
                </Button>
                </label> 
                <Button variant="contained" type="submit" color="seconday">Create Product</Button>
            </FormControl>
        </>
    )
}

export default CreateProduct;