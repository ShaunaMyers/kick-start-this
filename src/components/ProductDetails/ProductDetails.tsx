import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sampleProducts } from '../../sample_product_data';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function ProductDetails() {

    const [singleProduct, setSingleProduct] = useState({});
    let { id } = useParams();

    const findProduct = () => {
        return sampleProducts.rows.find(product => product.product_id === parseInt(id));
      }
    
    useEffect(() => {
    const foundProduct = findProduct();
    setSingleProduct(foundProduct)
    }, [])

    return (
        <>
        {singleProduct.images &&
            <Card sx={{ maxWidth: 600}}>
                <CardMedia
                  component='img'
                  height='250'
                  image={singleProduct.images[0]}
                  alt={'image of ' + singleProduct.title}
                />
                <CardContent>
                  <Typography variant='h5' component='div'>
                    {singleProduct.title}
                  </Typography>
                  <Typography variant='body2'>
                    {singleProduct.description}
                  </Typography>
                  <Typography variant='h6' component='div'>
                    Funds Goal: ${singleProduct.funds_goal}
                  </Typography>
                  <Typography variant='h6' component='div'>
                    Funds Raised: ${singleProduct.funds_raised}
                  </Typography>
                  <Button>Donate</Button>
                </CardContent>
            </Card>
        }
        </>
    );
  }
  
  export default ProductDetails;