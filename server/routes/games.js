import express from "express";
import fetch from "node-fetch";
const router = express.Router();
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });


const RAWG_API_KEY = process.env.RAWG_API_KEY
// const PLATFORMS = [49]; // NES, SNES, Genesis, etc.
// console.log("API KEY in games.js:", RAWG_API_KEY); // Check if the API key is being read correctly

const genres = ["action", "adventure", "rpg", "sports", "strategy"];

router.get("/games-by-genre", async (req, res) => {
    // const url = `https://api.rawg.io/api/games?platforms=49&page_size=20&key=${RAWG_API_KEY}`;
    const baseUrl = `https://api.rawg.io/api/games`;

    try {
        // Fetch games from RAWG API
        const fetchGamesByGenre = async (genre) => {
            const url = `${baseUrl}?genres=${genre}&platforms=49&page_size=10&key=${RAWG_API_KEY}`
            // console.log("Fetching URL:", url);
            const response = await fetch(url);
            const data = await response.json();
            return { genre, games: data.results };
        }
        
        const promises = genres.map(fetchGamesByGenre);
        const gamesByGenre = await Promise.all(promises);

        res.json(gamesByGenre);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch games" });
    }
});

export default router;
