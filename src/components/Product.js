function Product({ product, onAddToCart }) {
    return (
      <div className="product">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    );
  }
  
  export default Product;
  