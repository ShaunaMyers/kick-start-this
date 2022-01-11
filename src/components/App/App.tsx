import { useState, useEffect } from 'react';
import './App.css';
import { sampleProducts } from '../../sample_product_data';
import Products from '../Products/Products';
import { AllProducts } from '../../types';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function App() {

  const [products, setProducts]: [[], any] = useState([]);

  const returnProducts = (): AllProducts[] | undefined => {
    return sampleProducts.rows;
  }

  useEffect(() => {
    const data = returnProducts();
    setProducts(data)
  }, [])

  return (
    <main className="App">
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h3"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              Kickstart This
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <section>
        <Products productsList={products}/>
      </section>
    </main>
  );
}

export default App;
