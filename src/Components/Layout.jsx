import { Outlet } from "react-router-dom";
import './Layout.css';
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Layout() {
    const { getItemsCount } = useContext(CartContext);
    const cartItemsCount = getItemsCount();

    console.log("🔁 Navbar rendered");
    return (
        <div className="layout">
            <header>
                <h1>Play Stack</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={ ({ isActive }) => isActive ? "active-tab" : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product-page" className={ ({ isActive }) => isActive ? "active-tab" : ""}>Games</NavLink>
                        </li>
                        <li className="cart-link-li-item">
                            <NavLink to="/cart-page" className={ ({ isActive }) => isActive ? "active-tab" : ""}>Cart</NavLink>
                            {(getItemsCount > 0) && <p className="items-count-display">{cartItemsCount}</p>}
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
