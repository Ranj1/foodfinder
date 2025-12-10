# 📘 FoodFinder — Full-Stack Assignment Project

FoodFinder is a small full-stack app to search dishes and see which restaurants serve them, sorted by popularity (order count). It uses a Node.js + Express + MySQL backend and a React frontend. The goal: clean, modular architecture for quick demos/interviews.

## 🏗️ Project Structure
```
foodfinder/
├── backend/        # Node.js + Express + MySQL API
└── frontend/       # React UI for searching dishes
```

## ⚙️ Backend
- Node.js, Express, MySQL (Railway), mysql2 (promise-based), MVC-ish structure
- Single endpoint `/search/dishes` for list + filtered queries
- Indexed queries for performance

### Endpoint
`GET /search/dishes`
- `name` (optional; blank returns all dishes)
- `minPrice` (required)
- `maxPrice` (required)

Example: `/search/dishes?name=biryani&minPrice=0&maxPrice=9999`

### Tables
- `restaurants`
- `menu_items`
- `orders`

Relationships join dishes, restaurants, and historical orders to compute popularity.

## 🎨 Frontend
- React (CRA), Axios, simple components, plain CSS
- Service/config layering (`api.js`, `services/*`)
- Features: search bar with suggestions, min/max price filters, empty-dish fetch, card list, “Top X” tag, centered empty state

### Component Layout
```
src/
  App.js
  App.css
  components/
    FoodFinder.jsx
    FoodFinder.css
  config/
    api.js
  services/
    listService.js
    searchService.js
```
`FoodFinder.jsx` = main UI/logic; `api.js` = Axios instance; services isolate API calls.

## 🚀 How It Works
- On load: fetch all dishes via `/search/dishes?name=&minPrice=0&maxPrice=9999`
- User searches (e.g., “Chicken Biryani”, “Masala Dosa”, “Paneer Tikka”)
- Requires price inputs; results sorted by order count

## 🧪 Local Setup

### Backend
```bash
cd backend
npm install
npm run dev
```
Create `backend/.env`:
```
MYSQLHOST=
MYSQLUSER=
MYSQLPASSWORD=
MYSQLDATABASE=
MYSQLPORT=
PORT=5001
```

### Frontend
```bash
cd frontend
npm install
npm start
```
Create `frontend/.env`:
```
REACT_APP_BASE_URL=https://your-backend-url.up.railway.app
```

## ☁️ Deployment
- Backend: Railway + MySQL, public networking, env vars in dashboard
- Frontend: Vercel; connect repo and select `frontend` folder

## 👩‍💻 Author
Ranjana — Software Developer
