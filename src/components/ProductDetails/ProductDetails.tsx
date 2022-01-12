import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function ProductDetails() {
    return (
          <Card sx={{ maxWidth: 600}}>
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
                  ${funds_raised}
                </Typography>
                <Button>Donate</Button>
              </CardContent>
          </Card>
    );
  }
  
  export default ProductDetails;