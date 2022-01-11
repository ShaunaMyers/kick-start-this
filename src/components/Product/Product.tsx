function Product({ image, title, description }) {

    return (
      <section className="App">
        <img src={image}/>
        <h2>{title}</h2>
        <h4>{description}</h4>
      </section>
    );
  }
  
  export default Product;