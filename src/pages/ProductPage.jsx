import { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import './ProductPage.css';

function ProductPage() {
    const [gamesData, setGamesData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // console.log(`${import.meta.env.VITE_API_BASE_URL}`)
        fetch(`${import.meta.env.VITE_API_BASE_URL}/api/games-by-genre`)
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
                                price: (game.id % 10) + 10
                            }
                        }),
                    };
                });
                setGamesData(formattedData);
            }).finally(() => {
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching games data:", err);
                setLoading(false);
            });
    }, []);

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function sideScroll(scrollableContainerClass, direction, speed, distance, step) {
        const element = document.querySelector(`.${scrollableContainerClass}`);

        let scrollAmount = 0;
        var slideTimer = setInterval(function () {
            if (direction == 'left') {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    }

    //Display a loading animation while fetching data
    if(loading) {
        return <div className="loading-animation bottom-stripe bottom-stripe--orange">Fetching games...</div>;
    }

    // This is to handle the case where the API returns an empty array or no games
    if (!loading && gamesData.length === 0) {
        return <div className="no-games-message">No games available at the moment.</div>;
    }

    return (
        <>
            <h1 className="page-title">Games</h1>
            <div className="products-section">
                {
                    gamesData.map((gameData, index) => {
                        if (gameData.games.length === 0) return null; // Skip empty genres
                        return (<div className='genre-section' key={index}>
                            <h2 className='genre-title'>{gameData.genre}</h2>
                            <div className={`cards-section cards-section-${index}`} extraclassname={`cards-section-${index}`}>
                                <button className='scroll-btn scroll-left-btn' onClick={() => sideScroll(`cards-section-${index}`, "left", 10, 300, 10)}>&lt;</button>
                                {gameData.games.map(game => {
                                    return (<ProductCard product={game} key={gameData.genre + game.id} className={"card" + (index + 1)} />);
                                })
                                }
                                <button className='scroll-btn scroll-right-btn' onClick={() => sideScroll(`cards-section-${index}`, "right", 10, 300, 10)}>&gt;</button>
                            </div>
                        </div>)
                    })
                }
            </div>
        </>
    );
}

export default ProductPage;