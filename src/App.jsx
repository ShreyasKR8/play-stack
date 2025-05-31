import { useEffect, useState } from 'react'
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
        </>
    )
}

export default App
