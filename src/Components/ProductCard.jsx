
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="card-image"/>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>${product.price.toFixed(2)}</span>
    </div>
  );
}

export default ProductCard;
// This component is used to display individual product cards in a grid layout.