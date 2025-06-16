import { createContext, useEffect, useState } from "react";
import { saveCartToLocalStorage, loadCartFromLocalStorage } from '../Components/storage.js'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from local storage when the component mounts
    useEffect(() => {
        const savedCartItems = loadCartFromLocalStorage();
        if(savedCartItems.length === 0) {
            return;
        }

        setCartItems(savedCartItems);
    }, []);


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
                const updatedItems = [...prevCartItems];
                const updatedItem = { ...updatedItems[itemIndex] };
                updatedItem.quantity += item.quantity;
                updatedItems[itemIndex] = updatedItem;
                return setAndSaveCartItems(updatedItems);
            }
            
            //if item does not exist in cart, add it.
            return setAndSaveCartItems([...prevCartItems, item]);
        });
    }
    
    function updateQuantity(itemId, newQuantity) {
        setCartItems(prevCartItems => {
            const updatedCartItems = prevCartItems.map(cartItem => {
                if(cartItem.id === itemId) {
                    return {...cartItem, quantity: newQuantity}
                }
                return cartItem;
            });

            return setAndSaveCartItems(updatedCartItems);
        });
    }
    
    function removeItemFromCart(itemId) {
        setCartItems(prevCartItems => {
            const updatedCartItems = prevCartItems.filter(cartItem => cartItem.id !== itemId);
            return setAndSaveCartItems(updatedCartItems);
        });
    }

    function removeAllItemsFromCart() {
        saveCartToLocalStorage([]);
        setCartItems([]);
    }

    function setAndSaveCartItems(updatedCartItems){
        saveCartToLocalStorage(updatedCartItems);
        return updatedCartItems;
    }

    return(
        <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart, removeAllItemsFromCart, getTotalCost, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
};