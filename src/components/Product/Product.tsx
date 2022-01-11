import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Product({ image, title, description, funds_goal }) {
    return (
      <Grid item xs={6}>
        <Card sx={{ maxWidth: 450}}>
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
              <Typography variant='body2' color="text.secondary">
                {description}
              </Typography>
              <Typography variant='h6' component='div'>
                 {funds_goal}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
  
  export default Product;