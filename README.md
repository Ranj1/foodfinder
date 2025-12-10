# FoodFinder — Full-Stack Assignment Project

FoodFinder is a small full-stack application that lets you search for dishes and see which restaurants serve them, ranked by how many times each dish has been ordered.
The backend is built with Node.js, Express, and MySQL, and the frontend is a simple React app that consumes the API.
The project is intentionally kept clean and modular, making it easy to understand and suitable for quick demos or interview evaluations.

## Project Structure
```
foodfinder/
├── backend/        # Node.js + Express + MySQL API
└── frontend/       # React UI for searching dishes
```

## Backend
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
- On load: fetch all dishes via `/search/dishes?name=&minPrice=0&maxPrice=9999`
- User searches (e.g., “Chicken Biryani”, “Masala Dosa”, “Paneer Tikka”)
- Requires price inputs; results sorted by order count

## Postman Collection (Ready to Use)
Use this ready-made collection to test common scenarios:
- Get all dishes
- Search by name
- Search by price range
- Search by dish + price range
- Invalid request example (validation)

Import steps:
1) Open Postman → Import → Raw Text.
2) Paste the JSON below → Import.

```json
{
  "info": {
    "name": "FoodFinder API - Ready to Test",
    "_postman_id": "a213cbf2-35a8-4db7-8e6e-f7c1bc3702d3",
    "description": "Complete ready-to-use test suite for FoodFinder Search API.",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "1) Get All Dishes (default)",
      "request": {
        "method": "GET",
        "url": {
          "raw": "https://foodfinder-production.up.railway.app/search/dishes?name=&minPrice=0&maxPrice=9999",
          "protocol": "https",
          "host": ["foodfinder-production", "up", "railway", "app"],
          "path": ["search", "dishes"],
          "query": [
            { "key": "name", "value": "" },
            { "key": "minPrice", "value": "0" },
            { "key": "maxPrice", "value": "9999" }
          ]
        }
      }
    },
    {
      "name": "2) Search Dish by Name (e.g., Biryani)",
      "request": {
        "method": "GET",
        "url": {
          "raw": "https://foodfinder-production.up.railway.app/search/dishes?name=biryani&minPrice=0&maxPrice=9999",
          "protocol": "https",
          "host": ["foodfinder-production", "up", "railway", "app"],
          "path": ["search", "dishes"],
          "query": [
            { "key": "name", "value": "biryani" },
            { "key": "minPrice", "value": "0" },
            { "key": "maxPrice", "value": "9999" }
          ]
        }
      }
    },
    {
      "name": "3) Search by Price Range Only",
      "request": {
        "method": "GET",
        "url": {
          "raw": "https://foodfinder-production.up.railway.app/search/dishes?name=&minPrice=150&maxPrice=300",
          "protocol": "https",
          "host": ["foodfinder-production", "up", "railway", "app"],
          "path": ["search", "dishes"],
          "query": [
            { "key": "name", "value": "" },
            { "key": "minPrice", "value": "150" },
            { "key": "maxPrice", "value": "300" }
          ]
        }
      }
    },
    {
      "name": "4) Search Dish + Price Range",
      "request": {
        "method": "GET",
        "url": {
          "raw": "https://foodfinder-production.up.railway.app/search/dishes?name=chicken&minPrice=100&maxPrice=300",
          "protocol": "https",
          "host": ["foodfinder-production", "up", "railway", "app"],
          "path": ["search", "dishes"],
          "query": [
            { "key": "name", "value": "chicken" },
            { "key": "minPrice", "value": "100" },
            { "key": "maxPrice", "value": "300" }
          ]
        }
      }
    },
    {
      "name": "5) Invalid Request (missing minPrice)",
      "request": {
        "method": "GET",
        "url": {
          "raw": "https://foodfinder-production.up.railway.app/search/dishes?name=biryani&minPrice=&maxPrice=200",
          "protocol": "https",
          "host": ["foodfinder-production", "up", "railway", "app"],
          "path": ["search", "dishes"],
          "query": [
            { "key": "name", "value": "biryani" },
            { "key": "minPrice", "value": "" },
            { "key": "maxPrice", "value": "200" }
          ]
        }
      }
    }
  ]
}
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
