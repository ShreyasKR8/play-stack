import { useEffect, useState } from 'react'
import ProductCard from './Components/ProductCard.jsx'
import './App.css';

function App() {
    const [gamesData, setGamesData] = useState([]);

    useEffect(() => {
        fetch("/api/games/")
            .then(res => res.json())
            .catch(err => {
                console.error("Error fetching games:", err);
            })
            .then(data => {
                // console.log(data)
                const formattedData = data.map(gameData => {
                    return {
                        id: gameData.id,
                        name: gameData.name,
                        image: gameData.background_image,
                        description: gameData.description_raw,
                        price: Math.floor(Math.random() * 100) + 1 // Random price for demo
                    };
                }
                )
                setGamesData(formattedData);
            });
    }, []);

    return (
        <>
            <div className="cards-section">
                {gamesData.map((gameData, index) => {
                    return <ProductCard product={gameData} key={index} extraClassName={"card" + (index + 1)} />
                })}
            </div>
        </>
    )
}

export default App
