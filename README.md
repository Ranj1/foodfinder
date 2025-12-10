# FoodFinder — Full-Stack Assignment Project

FoodFinder is a small full-stack application that lets you search for dishes and see which restaurants serve them, ranked by how many times each dish has been ordered.
The backend is built with Node.js, Express, and MySQL, and the frontend is a simple React app that consumes the API.


## Project Structure
```
foodfinder/
├── backend/        # Node.js + Express + MySQL API
└── frontend/       # React UI for searching dishes
```

## Backend
- Node.js, Express, MySQL (Railway), mysql2 (promise-based), MVC-ish structure
- Single endpoint `/dishes/search` for list + filtered queries
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

## Frontend
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

## How It Works
- On load: fetch all dishes via `/dishes/search?name=&minPrice=0&maxPrice=9999`
- User searches (e.g., “Chicken Biryani”, “Masala Dosa”, “Paneer Tikka”)
- Requires price inputs; results sorted by order count

## Quick API Testing (Postman-Friendly cURL Commands)

Copy any of these into Postman (Import → Raw Text) or run them in a terminal.

**Get all dishes**
```bash
curl --location 'https://foodfinder-production.up.railway.app/dishes/search?name=&minPrice=0&maxPrice=9999'
```

**Search by dish name (example: Biryani)**
```bash
curl --location 'https://foodfinder-production.up.railway.app/dishes/search?name=biryani&minPrice=0&maxPrice=9999'
```

**Search by price range only**
```bash
curl --location 'https://foodfinder-production.up.railway.app/dishes/search?name=&minPrice=150&maxPrice=300'
```

**Search by dish + price range**
```bash
curl --location 'https://foodfinder-production.up.railway.app/dishes/search?name=chicken&minPrice=100&maxPrice=300'
```

**Invalid request example (to test validation)**
```bash
curl --location 'https://foodfinder-production.up.railway.app/dishes/search?name=biryani&minPrice=&maxPrice=200'
```

Expected error response:
```json
{ "error": "minPrice is required" }
```

## Local Setup

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

## Deployment
- The backend (Node.js + Express + MySQL) is hosted on Railway.
- The frontend (React)  is deployed on Vercel, chosen for its simplicity and fast global CDN.

## Author
Ranjana — Software Developer
