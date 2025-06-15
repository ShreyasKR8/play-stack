import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    
    function getTotalCost() {
        let totalCost = 0;
        for(let i = 0; i < cartItems.length; i++) {
            totalCost += (cartItems[i].cost * cartItems[i].quantity);
        }
        return totalCost;
    }

    function addToCart(item) {
        setCartItems(prevCartItems => {
            const itemIndex = prevCartItems.findIndex(cartItem => cartItem.id === item.id);
            //if item already exists in cart, update quantity.
            if(itemIndex != -1) {
                const updatedItems = prevCartItems;
                let updatedItem = prevCartItems[itemIndex];
                updatedItem.quantity += item.quantity;
                updatedItems.splice(itemIndex, 1, updatedItem);
                return updatedItems;
            }

            return [...prevCartItems, item];
        });
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
        <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart, removeAllItemsFromCart, getTotalCost }}>
            {children}
        </CartContext.Provider>
    )
};