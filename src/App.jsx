import './App.css';
import { Link } from "react-router-dom";

function App() {

    return (
        <>
            <h1>Hello from the main page of the app!</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/product-page">Games</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default App
