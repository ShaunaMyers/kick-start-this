import Product from '../Product/Product';

function Products({ products }) {

    const allProducts = products.map(item => {
       return <Product key={item.item_id} image={item.images[0]} title={item.title} description={item.description}/>
    })

    return (
      <section className="App">
        {allProducts}
      </section>
    );
  }
  
  export default Products;