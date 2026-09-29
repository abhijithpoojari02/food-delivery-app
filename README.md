# 🚚 Food Delivery Web Application (MERN Stack)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![Express.js](https://img.shields.io/badge/Express-4.x-lightgrey.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green.svg)](https://www.mongodb.com/)

A full-stack Food Delivery Web Application built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js). It includes a customer-facing frontend for browsing items and placing orders with Stripe checkout, an admin panel for managing food items & orders, and a secure RESTful API backend.

---

## 🌟 Key Features

### 👤 Customer Application (`/frontend`)
- **Authentication & Authorization**: User Registration & Login with JWT verification.
- **Interactive Menu**: Category-based food filtering with responsive grid layout.
- **Cart & Order Management**: Dynamic cart calculation, quantity adjustments, and persistent state.
- **Stripe Payment Integration**: Secure payment gateway checkout with order verification callback.
- **Order History & Tracking**: Real-time user order tracking status (Food Processing, Out for Delivery, Delivered).

### 🛡️ Admin Dashboard (`/admin`)
- **Food Inventory Management**: Add new food items with image uploads and category tags.
- **Menu Control**: List and remove items dynamically.
- **Order Dispatch & Status Updates**: View customer orders and update order statuses in real time.

### 🔒 Security & Best Practices
- Environment variables configured via `.env` files (sanitized & excluded from version control).
- Password hashing with `bcryptjs` and secure token management via `jsonwebtoken`.
- Input validation using `validator` library.
- Protected API routes and middleware authorization.

---

## 🛠️ Architecture & Tech Stack

| Tier | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, React Router DOM, Axios, Context API |
| **Admin Panel** | React 18, Vite, Axios, React Toastify |
| **Backend** | Node.js, Express.js, Multer (File Uploads), CORS, Dotenv |
| **Database** | MongoDB Atlas / Mongoose ORM |
| **Payment Gateway** | Stripe SDK |

---

## 📂 Project Structure

```
food-delivery-app/
├── admin/                  # Admin Dashboard (React + Vite)
│   ├── src/
│   │   ├── components/     # Admin Components (Navbar, Sidebar)
│   │   ├── pages/          # Add, List, Orders pages
│   │   └── assets/         # Admin UI assets
│   └── package.json
├── backend/                # Express REST API Backend
│   ├── config/             # Database connection setup
│   ├── controllers/        # User, Food, and Order controllers
│   ├── middleware/         # JWT Auth middleware
│   ├── models/             # Mongoose Schemas (User, Food, Order)
│   ├── routes/             # Express API Routes
│   ├── uploads/            # Multer image storage directory
│   ├── .env.example        # Environment variables template
│   └── server.js           # Express app entry point
├── frontend/               # Customer Web Application (React + Vite)
│   ├── src/
│   │   ├── components/     # Navbar, FoodDisplay, Header, Footer, LoginPopup
│   │   ├── context/        # StoreContext (Global state)
│   │   ├── pages/          # Home, Cart, PlaceOrder, Verify, MyOrders
│   │   └── assets/         # Frontend UI icons & images
│   └── package.json
├── .env.example            # Root environment template
├── .gitignore              # Git ignore rules for node_modules & secrets
└── README.md               # Project documentation
```

---

## 🚀 Quickstart & Setup Guide

### 📋 Prerequisites
- **Node.js** (v18.x or v20.x recommended)
- **npm** (v9+ or v10+)
- **MongoDB Atlas** cluster or local MongoDB instance
- **Stripe Account** (for test API keys)

---

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/food-delivery-app.git
cd food-delivery-app
```

---

### 2️⃣ Backend Configuration & Startup

1. Navigate to the backend directory:
   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file inside the `backend/` folder based on `.env.example`:
   ```env
   JWT_SECRET="your_jwt_secret_key_here"
   STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key_here"
   MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/food-delivery"
   PORT=4000
   ```

3. Start the backend development server:
   ```bash
   npm run server
   ```
   *The backend server will run on `http://localhost:4000`.*

---

### 3️⃣ Frontend Application Setup

1. Open a new terminal and navigate to the `frontend/` directory:
   ```bash
   cd frontend
   npm install
   ```

2. Start the frontend Vite development server:
   ```bash
   npm run dev
   ```
   *The customer Web App will run on `http://localhost:5173`.*

---

### 4️⃣ Admin Dashboard Setup

1. Open another terminal and navigate to the `admin/` directory:
   ```bash
   cd admin
   npm install
   ```

2. Start the admin Vite development server:
   ```bash
   npm run dev
   ```
   *The Admin Panel will run on `http://localhost:5174`.*

---

## 📡 API Endpoints Summary

### 🔑 Authentication (`/api/user`)
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Authenticate user & return JWT token

### 🍔 Food Management (`/api/food`)
- `POST /api/food/add` - Add a food item (Admin)
- `GET /api/food/list` - Fetch all food items
- `POST /api/food/remove` - Delete a food item by ID (Admin)

### 🛒 Cart & Orders (`/api/cart`, `/api/order`)
- `POST /api/cart/add` - Add item to user cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get user cart items
- `POST /api/order/place` - Create Stripe payment session & record order
- `POST /api/order/verify` - Verify Stripe payment status
- `POST /api/order/userorders` - Get user order history
- `GET /api/order/list` - Get all customer orders (Admin)
- `POST /api/order/status` - Update order delivery status (Admin)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a Pull Request.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
