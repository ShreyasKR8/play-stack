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
console.log("API KEY in games.js:", RAWG_API_KEY); // Check if the API key is being read correctly
router.get("/", async (req, res) => {
    console.log("URL:"); // Log the URL to check if it's correct
    const url = `https://api.rawg.io/api/games?platforms=49&page_size=20&key=${RAWG_API_KEY}`;

    // Fetch games from RAWG API
    try {
        console.log("Fetching URL:", url);
        const response = await fetch(url);
        const data = await response.json();
        res.json(data.results);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch games" });
    }
});

export default router;
