# Smart Campus Service Booking and Management System

A MERN full-stack academic project for Term Work 2. Includes a React responsive interface, Express REST API, MongoDB/Mongoose data models, JWT authentication, role-based authorization, service discovery, bookings, simulated payments, feedback endpoint, and basic admin dashboard.

## Requirements
- Windows 10/11, VS Code
- Node.js 20 or newer LTS (npm is included)
- MongoDB Community Server running locally, or a MongoDB Atlas database URI

## 1. Configure backend
Open the `smart-campus` folder in VS Code. Open **Terminal → New Terminal**, then run these commands in PowerShell:

```powershell
cd server
Copy-Item .env.example .env
npm install
```

Open `server/.env`. For local MongoDB, keep `MONGODB_URI=mongodb://127.0.0.1:27017/smart_campus`. Change `JWT_SECRET` to a long random value before use. If using MongoDB Atlas, put your Atlas connection URI in `MONGODB_URI`.

## 2. Start MongoDB
Install and start MongoDB Community Server, or configure Atlas. If MongoDB is not running, the API will show a connection error.

## 3. Add sample campus services
In the same terminal, still inside `server`, run:

```powershell
npm run seed
```

## 4. Start the backend API
In the same `server` terminal:

```powershell
npm run dev
```

Keep this terminal open. Open `http://localhost:5000/api/health` in a browser; expected JSON: `{"status":"ok","message":"Smart Campus API is running"}`.

## 5. Start the frontend
In VS Code choose **Terminal → New Terminal** to open a second terminal. From the project root (the folder containing `server` and `client`) run:

```powershell
cd client
npm install
npm run dev
```

Open the local URL Vite prints, normally `http://localhost:5173`.

## 6. First use
- Create a student account using Sign in → Create an account.
- Browse sample services and submit a booking.
- Use My bookings to track it and try the demo payment button. It does not charge real money.
- To test admin features, register your own account, then change that account's `role` to `admin` in MongoDB Compass or `mongosh`. See `API_REFERENCE.md`. Never expose a public admin registration option.

## 7. Troubleshooting
- `npm is not recognized`: install Node.js LTS, close/reopen VS Code, and run `node -v` and `npm -v`.
- MongoDB connection failed: ensure MongoDB service is running or verify Atlas URI/network access.
- `EADDRINUSE`: another process uses port 5000/5173; stop the other process or change the port.
- API calls fail: keep the backend terminal running and check `http://localhost:5000/api/health` first.
- Dependencies fail: check internet access, then retry `npm install` inside the correct `server` or `client` folder.

## Implemented API routes
See `API_REFERENCE.md` for endpoint details and example request bodies. The payment endpoint is a simulation. This is a coursework starter, not a production-hardened booking platform; production deployment needs stronger validation, rate limiting, audit logging, concurrency-safe availability, and real payment provider verification.
