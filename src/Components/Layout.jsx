import { Outlet } from "react-router-dom";
import './Layout.css';
import { Link } from "react-router-dom";

export default function Layout() {
    console.log("🔁 Navbar rendered");
    return (
        <div className="layout">
            <header>
                <h1>Play Stack</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/product-page">Games</Link>
                        </li>
                        <li>
                            <Link to="/cart-page">Cart</Link>
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
