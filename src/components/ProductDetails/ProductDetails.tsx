import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleProduct } from "../../apiCalls";
// import { sampleProducts } from "../../sample_product_data";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function ProductDetails() {

    const [singleProduct, setSingleProduct] = useState({});
    const [error, setError] = useState('');
    let { id } = useParams();

    const findProduct = () => {
        setError('')
        getSingleProduct(id)
        .then(result => {
          if (result) {
            setSingleProduct(result.rows[0])
          } else {
            setError('Oop, there was a problem finding the product')
          }
        })
        .catch(err => {
          setError('Oops, problem finding product. Please refresh the page.')
        })
    }
    
    useEffect(() => {
      findProduct();
    }, [])

    return (
        <>
        {singleProduct.images &&
            <Card sx={{ maxWidth: 600}}>
                <CardMedia
                  component="img"
                  height="250"
                  image={singleProduct.images[0]}
                  alt={"image of " + singleProduct.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {singleProduct.title}
                  </Typography>
                  <Typography variant="body2">
                    {singleProduct.description}
                  </Typography>
                  <Typography variant="h6" component="div">
                    Funds Goal: ${singleProduct.funds_goal}
                  </Typography>
                  <Typography variant="h6" component="div">
                    Funds Raised: ${singleProduct.funds_raised}
                  </Typography>
                  <Typography>
                    <Link to={`/donate/${id}/${singleProduct.title}`}><button>Donate</button></Link>
                  </Typography>
                  <Typography>
                    <Link to="/">Return to browse all products</Link>
                  </Typography>
                </CardContent>
            </Card>
        }
        </>
    );
  }
  
  export default ProductDetails;