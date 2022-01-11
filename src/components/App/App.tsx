import { useState, useEffect } from 'react';
import './App.css';
import { sampleProducts } from '../../sample_product_data';
import Products from '../Products/Products';

function App() {

  const [products, setProducts] = useState([]);

  const returnProducts = () => {
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
        <Products products={products}/>
      </section>
    </main>
  );
}

export default App;
