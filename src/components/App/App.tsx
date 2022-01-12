import { useState, useEffect } from 'react';
import './App.css';
import Products from '../Products/Products';
import ProductDetails from '../ProductDetails/ProductDetails';
import { Routes, Route, useParams } from 'react-router-dom';
import { AllProducts } from '../../types';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { sampleProducts } from '../../sample_product_data';

function App() {

  const [products, setProducts]: [[], any] = useState([]);
  let { id } = useParams();

  const returnProducts = (): AllProducts[] | undefined => {
    return sampleProducts.rows;
  }

  useEffect(() => {
    const data = returnProducts();
    setProducts(data)
  }, [])

  const returnProductInfo = () => {
    return products.find(item => item.product_id === id)
  }

  return (
    <main className="App">
      <AppBar position="static">
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              variant="h3"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              style={{flex: 1}}
            >
              Kickstart This
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Add Your Product">
                <IconButton sx={{ p: 0 }}>
                  <AddIcon fontSize="large"/> 
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/" element={<Products productsList={products}/>} />
        <Route path="/products/:id" element={<ProductDetails />}/>
      </Routes>
    </main>
  );
}

export default App;
