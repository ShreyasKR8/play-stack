# 🕹️ Play Stack – Retro Cartridge Game Store

A full-stack web application for browsing and buying classic NES cartridge games.

---


## Tech Stack

- **Frontend**: React + Vite + React Router
- **Backend**: Node.js + Express
- **API**: RAWG Video Games Database API
- **Deployment**:
  - Frontend: Vercel
  - Backend: Render
- **State Management**: React Context + Local Storage

## Features

- ⚛️ Built with React (Vite) frontend and Express backend  
- 🎮 Uses [RAWG API](https://rawg.io/apidocs) to fetch retro cartridge-based games     
- 🔁 Frontend hosted on **Vercel**, backend deployed on **Render**

---

## Project Structure

```
play-stack/
├── public/
├── src/
│   ├── Components/
│   ├── context/
│   ├── routes/
│   ├── pages/
│   └── main.jsx
├── server/
│   ├── index.js
│   ├── routes/
│   └── .env
├── .env                 # Frontend (VITE_API_BASE_URL)
├── index.html
├── package.json
├── vite.config.js
```

---

## Hosting Setup

### 🔹 Frontend (Vercel)

- **Root Directory**: `/`
- **Environment Variable**:
  ```
  VITE_API_BASE_URL=https://your-backend-name.onrender.com/api
  ```

### 🔹 Backend (Render)

- **Root Directory**: `server`
- **Environment Variable**:
  ```
  RAWG_API_KEY=your_rawg_api_key
  ```

---

## Scripts

```bash
# Start Vite frontend
npm run dev

# Build frontend
npm run build

# Run Express backend
node server/index.js
```

---

## Environment Variables

### Backend (`server/.env`)
```
RAWG_API_KEY=your_rawg_api_key
```

### Frontend (`.env`)
```
VITE_API_BASE_URL=https://your-backend-name.onrender.com/api
```

---

## Attribution

> Game controller icon by [shmai - Flaticon](https://www.flaticon.com/free-icons/game-controller)

---

## Future Improvements

- Add individual game pages  
- Add authentication (login/register)  
- Integrate payment gateway
