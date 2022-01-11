import { useState, useEffect } from 'react';
import './App.css';
import { sampleProducts } from '../../sample_product_data';
import Products from '../Products/Products';
import { AllProducts } from '../../types';


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
      <header className="App-header">
        <h1>Kickstart This</h1>
      </header>
      <section>
        <Products productsList={products}/>
      </section>
    </main>
  );
}

export default App;
