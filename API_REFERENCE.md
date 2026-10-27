# REST API Reference
Base URL: `http://localhost:5000/api`

## Health
- `GET /health` — confirms the API is running.

## Authentication
- `POST /auth/register` — body `{ "name": "Student Name", "email": "student@example.com", "password": "at-least-8-chars" }`; creates a student account.
- `POST /auth/login` — body `{ "email": "student@example.com", "password": "..." }`; returns JWT and user.
- `GET /auth/me` — current account; requires `Authorization: Bearer <token>`.

## Services
- `GET /services` — list active services. Optional `?q=lab&category=Academic`.
- `POST /services` — create service (admin only).
- `PATCH /services/:id` — update service (admin only).
- `DELETE /services/:id` — archive service (admin only).

## Bookings (all require login unless noted)
- `POST /bookings` — create `{ "service": "serviceId", "date": "YYYY-MM-DD", "startTime": "10:00", "endTime": "11:00", "notes": "optional" }`.
- `GET /bookings/mine` — signed-in user's bookings.
- `GET /bookings` — all bookings (admin only).
- `PATCH /bookings/:id/status` — admin updates status to `confirmed`, `rejected`, `completed`, or `cancelled`.
- `POST /bookings/:id/pay` — demo payment; no real money is charged. Returns a `DEMO-...` transaction ID.
- `POST /bookings/:id/feedback` — body `{ "rating": 5, "comment": "Great service" }`.
- `DELETE /bookings/:id` — cancel own booking (or admin).

## Admin setup
Registration intentionally never lets a public user choose the admin role. After registering your own account, use MongoDB Compass or `mongosh` to change that account's `role` field to `admin`. Do this only for your own trusted development account. Example `mongosh` command: `db.users.updateOne({email:"your-email@example.com"},{$set:{role:"admin"}})`.

## Notes
- Payment is a local simulation, not a real gateway integration.
- Time-overlap checking is suitable as a coursework baseline; production systems need stronger concurrency protection and service-specific capacity/operating-hour rules.
