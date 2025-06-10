import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import gamesRouter from "./routes/games.js";

// Load environment variables from .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const result = dotenv.config({ path: path.resolve(__dirname, ".env") });
console.log("API KEY in index.js:", result.parsed.RAWG_API_KEY); // Check if the API key is being read correctly

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use("/api", gamesRouter);
app.use(express.static(path.join(__dirname, "..", "dist")));

// Serve the React app for all other routes
app.get("\\*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
