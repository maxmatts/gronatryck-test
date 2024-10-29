// Definierar Product-komponenten som tar emot props: product och onAddToCart
function Product({ product, onAddToCart }) {
  return (
      // Huvudelement för produkt
      <div className="product">
          <h3>{product.name}</h3> {/* Visar produktens namn */}
          <p>Price: ${product.price}</p> {/* Visar produktens pris */}
          {/* Knapp för att lägga till produkten i kundvagnen, anropar onAddToCart med produkt som argument */}
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
  );
}

// Exporterar Product-komponenten för användning i andra delar av applikationen
export default Product;

  