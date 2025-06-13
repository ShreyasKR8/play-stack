import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems);
}

export default CartPage;