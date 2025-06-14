import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item) {
        setCartItems(prev => [...prev, item]);
    }

    function removeItemFromCart(itemId) {
        setCartItems(prevCartItems => {
            const updatedCartItems = prevCartItems.filter(cartItem => cartItem.id !== itemId);
            return updatedCartItems;
        });
        }

    function removeAllItemsFromCart() {
        setCartItems([]);
    }

    return(
        <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart, removeAllItemsFromCart }}>
            {children}
        </CartContext.Provider>
    )
};