import './App.css';
import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <div className="home-container">
                <h1 className="main-heading">Welcome to Play Stack!</h1>
                <p className="intro-text">
                    Relive the golden age of gaming. Play Stack brings you authentic NES cartridge games straight from the retro vault.
                </p>

                <div className="cta-section">
                    <Link to="/product-page" className="cta-button">Browse NES Games</Link>
                </div>

                <section className="features">
                    <h2>Why Play Stack?</h2>
                    <ul>
                        <li>🕹️ 100% authentic NES cartridges</li>
                        <li>📦 Carefully tested and packed</li>
                        <li>🧠 Curated by retro gaming lovers</li>
                    </ul>
                </section>

                <footer>
                    <a
                        href="https://www.flaticon.com/free-icons/game-controller"
                        title="game controller icons"
                        className="icon-attribute"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Game controller icons created by shmai - Flaticon
                    </a>
                </footer>
            </div>
        </>
    )
}

export default App;