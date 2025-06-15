import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItemCard({ item }) {
    const { removeItemFromCart, updateQuantity } = useContext(CartContext);

    const netCost = item.cost * item.quantity;

    function onClickedDecrementBtn() {
        if(item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        }
    }
    
    function onClickedIncrementBtn() {
        updateQuantity(item.id, item.quantity + 1);
    }

    return (
        <div className="cart-item-card">
            <p className="item-info item-name">{item.name}</p>
            <p className="item-info item-net-cost">{netCost}</p>
            <div className="quantity-selection">
                <button className="qty-btn" onClick={() => onClickedDecrementBtn()}>-</button>
                <p>{item.quantity}</p>
                <button className="qty-btn" onClick={() => onClickedIncrementBtn()}>+</button>
            </div>
            <button className="remove-from-cart-btn" onClick={() => removeItemFromCart(item.id)}>Remove</button>
        </div>
    );
}

export default CartItemCard;