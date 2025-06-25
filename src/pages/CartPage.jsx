import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItemCard from "../Components/CartItemCard";
import './CartPage.css'

function CartPage() {
    const { cartItems, removeAllItemsFromCart, getTotalCost } = useContext(CartContext);
    // console.log(cartItems);

    const itemsTotalCost = getTotalCost();
    let deliveryCost = 2;
    if(itemsTotalCost === 0 || itemsTotalCost > 50) {
        deliveryCost = 0;
    }

    return(
        <>
            <h1 className="page-title">Cart</h1>
            <div className="cart-section">
                {cartItems.length === 0 && (
                    <div className="cart-empty-message">
                        <p>Your cart is empty. Go add some games!</p>
                    </div>
                )}
                {cartItems.length > 0 && (
                    <>
                        <div className="cart-item-section">
                            <div className="item-col-names">
                                <h3 className="game-col">Game</h3>
                                <h3 className="cost-col">Cost</h3>
                                <h3 className="qty-col">Qty</h3>
                            </div>
                            {cartItems.map((cartItem, index) => (
                                <CartItemCard key={index} item={cartItem} />
                            ))}
                        </div>
                        <div className="order-summary-section">
                        <header>
                            <h2>Order Summary</h2>
                        </header>
                        <div className="cost-details">
                            <p>Items Total: ${itemsTotalCost}</p>
                            <p>Delivery cost: ${deliveryCost}</p>
                            <p>Order Total: ${itemsTotalCost + deliveryCost}</p>
                            <button className="buy-items-btn btn-fill-bottom btn-fill-bottom--green">Proceed to buy</button>
                        </div>
                    </div>
                </>
                )}
            </div>
            {cartItems.length > 0 && <button className="delete-all-items-btn" onClick={removeAllItemsFromCart}>Clear Cart</button>}
        </>
    )
}

export default CartPage;