import { useState, useEffect } from 'react';
import './App.css';
import { sampleProducts } from '../../sample_product_data';
import Products from '../Products/Products';
import { AllProducts } from '../../types';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

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
                  <AddIcon fontSize="Large"/> 
                </IconButton>
              </Tooltip>
            </Box>
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
