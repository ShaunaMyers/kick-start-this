import Product from '../Product/Product';
import Grid from '@material-ui/core/Grid';


const Products = ({ productsList, isAdmin, handleDeleteProduct }) => {

    const allProducts = productsList.map(item => {
       return <Product key={item.product_id} id={item.product_id} image={item.images[0]} title={item.title} description={item.description} funds_goal={item.funds_goal} isAdmin={isAdmin} handleDeleteProduct={handleDeleteProduct}/>
    })

    return (
      <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 2, md: 3 }}>
        {allProducts}
      </Grid>
    );
}
  
  export default Products;