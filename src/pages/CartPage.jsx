import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItemCard from "../Components/CartItemCard";
import './CartPage.css'

function CartPage() {
    const { cartItems, removeAllItemsFromCart } = useContext(CartContext);
    console.log(cartItems);

    return(
        <>
            <h1 className="page-title">Cart</h1>
            <button className="delete-all-items-btn" onClick={removeAllItemsFromCart}>Clear Cart</button>
            <div className="cart-item-section">
                {cartItems.map((cartItem, index) => {
                    return <CartItemCard key={index} item={cartItem}/>
                }
            )}
            </div>
        </>
    )
}

export default CartPage;