import { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import './ProductPage.css';

function ProductPage() {
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
                        price: Math.floor(Math.random() * 100) + 1 // Random price for demo
                    };
                }
                )
                setGamesData(formattedData);
            });
    }, []);

    return (
        <>
            <h1 className="page-title">Games</h1>
            <div className="cards-section">
                {gamesData.map((gameData, index) => {
                    return <ProductCard product={gameData} key={index} extraClassName={"card" + (index + 1)} />
                })}
            </div>
        </>
    );
}

export default ProductPage;