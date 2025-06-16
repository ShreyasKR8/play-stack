
export function saveCartToLocalStorage(cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export function loadCartFromLocalStorage() {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    return savedCartItems || [];
}