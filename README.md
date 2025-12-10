FoodFinder

FoodFinder is a small full-stack project structured with separate backend and frontend modules.
The backend is the primary focus and provides an API for searching dishes and ranking restaurants based on order frequency.
The frontend folder is reserved for a simple UI layer and can be expanded later.

Project Structure
foodfinder/
│
├── backend/    → Node.js + Express API (assignment requirement)
│
└── frontend/   → Placeholder for UI (React or basic HTML)


The repository is organized this way to keep the backend and frontend independent, making it easier to deploy and maintain each part separately.

Backend Overview

The backend is built using:

Node.js

Express

MySQL (Railway-hosted)

mysql2 (promise wrapper)

MVC folder structure

Raw SQL for performance and transparency

The goal of the backend is to expose an API that returns a list of restaurants serving a specific dish, filtered by price and ranked by order count.

Main API Endpoint
GET /search/dishes

Query Parameters

Name	Description
name	Name of the dish (supports partial match)
minPrice	Minimum dish price
maxPrice	Maximum dish price

Example Request

/search/dishes?name=biryani&minPrice=100&maxPrice=300


The response includes restaurant details, dish info, and the number of times the dish was ordered.

Database Model

The backend uses three tables:

restaurants

id

name

city

menu_items

id

restaurant_id

name

price

orders

id

restaurant_id

menu_item_id

created_at

Indexes are applied on searchable columns to keep the API performant.

Running the Backend Locally

Install dependencies

cd backend
npm install


Add environment variables
Create a .env file inside backend/:

MYSQLHOST=
MYSQLUSER=
MYSQLPASSWORD=
MYSQLDATABASE=
MYSQLPORT=
PORT=5001


Start the server

npm run dev

Deployment

The backend is deployed on Railway using:

A dedicated MySQL instance

Public networking for HTTP access

Environment variables managed in Railway Dashboard

The API runs on the port assigned via process.env.PORT.

Frontend Overview

The frontend/ folder is kept separate for modularity.
This area is intended for building a small UI (React or plain HTML) that can interact with the backend API.
It is not part of the core assignment but the structure is prepared for future expansion.

Author

Ranjana
Software Developer
