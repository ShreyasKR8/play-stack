import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItemCard({ item }) {
    const { removeItemFromCart } = useContext(CartContext);

    const netCost = item.cost * item.quantity;

    return (
        <div className="cart-item-card">
            <p className="item-info item-name">{item.name}</p>
            <p className="item-info item-net-cost">{netCost}</p>
            <p className="item-info item-quantity">{item.quantity}</p>
            <button className="remove-from-cart-btn" onClick={() => removeItemFromCart(item.id)}>Remove</button>
        </div>
    );
}

export default CartItemCard;