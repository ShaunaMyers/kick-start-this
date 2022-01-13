import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface Props {
   id: number, 
   image: string,
   title: string, 
   description: string, 
   funds_goal: number, 
   funds_raised: number, 
   isAdmin: boolean,
   handleDeleteProduct: Function
}

function Product({ id, image, title, description, funds_goal, isAdmin, handleDeleteProduct }: Props) {

    const onDeleteProduct = () => {
      handleDeleteProduct(id);
    }

    return (
      <Grid item xs={6}>
        <Card 
          // sx={{ maxWidth: 450}}
        >
          <CardActionArea>
            <CardMedia
              component='img'
              height='250'
              image={image}
              alt={'image of ' + title}
            />
            <CardContent>
              <Typography variant='h5' component='div'>
                {title}
              </Typography>
              <Typography variant='body2'>
                {description}
              </Typography>
              <Typography variant='h6' component='div'>
                 ${funds_goal}
              </Typography>
              {isAdmin ? 
                  <button onClick={() => onDeleteProduct()}>Delete</button>
                  : 
                  <Link to={`/products/${id}`}> 
                    <button>More Info</button>
                  </Link>
              }
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
  
  export default Product;