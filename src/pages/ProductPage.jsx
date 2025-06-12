import { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import './ProductPage.css';

function ProductPage() {
    const [gamesData, setGamesData] = useState([]);

    useEffect(() => {
        fetch("/api/games-by-genre")
            .then(res => res.json())
            .then(data => {
                const formattedData = data.map(gameData => {
                    const gamesGenre = capitalizeFirstLetter(gameData.genre);
                    return {
                        genre: gamesGenre,
                        games: gameData.games.map(game => {
                            return {
                                id: game.id,
                                name: game.name,
                                image: game.background_image,
                                price: Math.floor(Math.random() * 100) + 1
                            }
                        }),
                    };
                }
                )
                setGamesData(formattedData);
            });
    }, []);

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function sideScroll(scrollableContainerClass, direction, speed, distance, step){
    const element = document.querySelector(`.${scrollableContainerClass}`);

    let scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}


    return (
        <>
            <h1 className="page-title">Games</h1>
            <div className="products-section">
                {
                    gamesData.map((gameData, index) => {
                        if(gameData.games.length === 0) return null; // Skip empty genres
                        return (<div className='genre-section' key={index}>
                            <h2 className='genre-header'>{gameData.genre}</h2>
                            <div className={`cards-section cards-section-${index}`} extraclassname={`cards-section-${index}`}>
                                <button className='scroll-left-btn' onClick={() => sideScroll(`cards-section-${index}`, "left", 10, 300, 10)}>&lt;</button>
                                {gameData.games.map(game => {
                                    return (<ProductCard product={game} key={gameData.genre + game.id} className={"card" + (index + 1)} />);
                                })
                                }
                                <button className='scroll-right-btn' onClick={() => sideScroll(`cards-section-${index}`,"right", 10, 300, 10)}>&gt;</button>
                            </div>
                        </div>)
                    })
                }
            </div>
        </>
    );
}

export default ProductPage;