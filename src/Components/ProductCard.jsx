import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useContext(CartContext);
    
    function onClickedIncrementBtn() {
        setQuantity(current => current + 1);
        // cost = product.price * (quantity + 1);
    }

    function onClickedDecrementBtn() {
        if(quantity > 1) {
            setQuantity(current => current - 1);
            // cost = product.price * (quantity - 1);
        }
    }

    function handleAddToCart() {
        const item = {
            id: product.id,
            name: product.name,
            cost: product.price,
            quantity: quantity,
        }
        addToCart(item);
    }

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="card-image" />
            <h3>{product.name}</h3>
            <p className="cost">${product.price}</p>
            <div className="quantity-selection">
                <button className="qty-btn" onClick={() => onClickedDecrementBtn()}>-</button>
                <p>{quantity}</p>
                <button className="qty-btn" onClick={() => onClickedIncrementBtn()}>+</button>
            </div>
            <button className="add-cart-btn btn-bottom-stripe btn-bottom-stripe--orange btn-click-effect" onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
}

export default ProductCard;
// This component is used to display individual product cards in a grid layout.