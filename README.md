# 🛍️ Store API

This is a simple RESTful Store API built with **Node.js**, **Express**, and **MongoDB**.  
It supports powerful features like filtering, sorting, pagination, and numeric queries.

## 📦 Features

- ✅ Filter products by name, company, featured status  
- ✅ Search with regex (case-insensitive, partial matches)  
- ✅ Numeric filters (price, rating)  
- ✅ Sorting (by price, name, etc.)  
- ✅ Select specific fields (e.g., `name`, `price`)  
- ✅ Pagination (page & limit support)

## 🚀 Getting Started

### 1. Clone the repository

1-git clone https://github.com/Abdslamekessou/Store-Api.git

2-cd Store-Api


### 2. Install dependencies

npm install

### 3. Set up environment variables

Create a `.env` file in the root and add your MongoDB URI:

MONGO_URI=your_mongodb_connection_string
PORT=5000

> Replace `your_mongodb_connection_string` with your actual MongoDB URI (e.g., from MongoDB Atlas).

### 4. Start the server

For production
npm start

For development (with nodemon)
npm run dev


## 🔍 Sample Endpoints


### With query parameters:

- **Filtering:**  
  `/api/v1/products?company=ikea&featured=true`

- **Sorting:**  
  `/api/v1/products?sort=price,-name`

- **Field Selection:**  
  `/api/v1/products?fields=name,price`

- **Pagination:**  
  `/api/v1/products?page=2&limit=5`

- **Numeric Filters:**  
  `/api/v1/products?numericFilters=price>30,rate>=4.5`


## 💡 Credits

Project guided by the FreeCodeCamp Node.js & Express Course.  
Extended and customized by [Abdslame Kessou](https://github.com/Abdslamekessou)

## 🧪 Tools & Tech

- Node.js  
- Express  
- MongoDB  
- Mongoose  
- dotenv  
- Postman

## 📫 Contact

If you’d like to collaborate, feel free to connect on [LinkedIn](https://www.linkedin.com/in/abdessalem-kessouri-8aa0b2286/)!



