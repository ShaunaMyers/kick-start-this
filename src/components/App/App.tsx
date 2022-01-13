import { useState, useEffect } from 'react';
import './App.css';
import { getAllProducts, addSingleProduct, deleteSingleProduct, updateFundsRaised } from '../../apiCalls';
import Products from '../Products/Products';
import ProductDetails from '../ProductDetails/ProductDetails';
import DonationForm from '../DonationForm/DonationForm';
import CreateProduct from '../CreateProduct/CreateProduct';
import AdminView from '../AdminView/AdminView';
import { Routes, Route, Link } from 'react-router-dom';
import { SingleProduct, NewProduct } from '../../types';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const App = () => {
  const [products, setProducts] = useState<[]>([]);
  const [error, setError] = useState<string>('');
  const isAdmin = false;

  const returnProducts = (): void => { 
    setError('');
    getAllProducts()
    .then(result => {
      if (!result.rows.length) {
        setError('Oops, it appears there are no products. Please add your own!')
      } else {
        setProducts(result.rows)
      }
    })
    .catch((err) => {
      setError('Oops, problem loading products. Please refresh the page.')
    })
  }

  useEffect(() => {
    returnProducts();
  }, [])

  const handleAddProduct = (newProduct: NewProduct) => {
    addSingleProduct(newProduct);
    setProducts([...products, newProduct])
  }

  const handleDeleteProduct = (id: number) => {
    deleteSingleProduct(id);
    const remainingProducts = products.filter((product: SingleProduct) => product.product_id !== id)
    setProducts(remainingProducts);
  }

  const handleUpdateFundsRaised = (donation: string, id: string) => {
    let foundProduct = products.find((product: string | number | []) => product.product_id === parseInt(id));
    const currentFunds = foundProduct.funds_raised;
    let totalFunds = currentFunds + parseInt(donation);
    updateFundsRaised(totalFunds, parseInt(id));
  }

  return (
    <main className="App">
      <AppBar position="static">
        <Container maxWidth='xl'>
          {console.log('products', products)}
          <Toolbar disableGutters>
            <Typography
              variant="h3"
              noWrap
              component="div"
              // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              style={{flex: 1}}
            >
              Kickstart This
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Add Your Product">
                <IconButton component={Link} to="/createproduct" 
                // sx={{ p: 0 }}
                >
                  <AddIcon fontSize="large"/> 
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/" element={<Products productsList={products} isAdmin={isAdmin} handleDeleteProduct={handleDeleteProduct} />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/donate/:id/:title" element={<DonationForm handleUpdateFundsRaised={handleUpdateFundsRaised} />} />
        <Route path="/createproduct" element={<CreateProduct handleAddProduct={handleAddProduct} />} />
        <Route path="/adminview" element={<AdminView productsList={products} handleDeleteProduct={handleDeleteProduct}/>} />
      </Routes>
    </main>
  );
}

export default App;
