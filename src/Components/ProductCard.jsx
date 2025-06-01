import { useState } from "react";

function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(1);
    let cost = product.price * quantity;

    
    function onClickedIncrementBtn() {
        setQuantity(current => current + 1);
        cost = product.price * (quantity + 1);
    }

    function onClickedDecrementBtn() {
        if(quantity > 1) {
            setQuantity(current => current - 1);
            cost = product.price * (quantity - 1);
        }
    }

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="card-image" />
            <h3>{product.name}</h3>
            <p className="cost">${cost}</p>
            <div className="quantity-selection">
                <button className="qty-btn" onClick={() => onClickedDecrementBtn()}>-</button>
                <p>{quantity}</p>
                <button className="qty-btn" onClick={() => onClickedIncrementBtn()}>+</button>
            </div>
            <button className="add-cart-btn">Add to Cart</button>
        </div>
    );
}

export default ProductCard;
// This component is used to display individual product cards in a grid layout.