import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item) {
        setCartItems(prev => [...prev, item]);
    }

    // function removeFromCart(item) {
    //     setCartItems(prevCartItems => {
    //         let updatedCartItems = prevCartItems.splice()

    //     }
    // }

    return(
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )
};