# Session 6 — Express MVC Task

A simple Express.js server following a basic MVC pattern.

Base route: `/api`

Endpoints:

- GET `/api/` — Welcome
- GET `/api/about` — About info
- GET `/api/contact` — Contact info
- GET `/api/time` — Returns dynamic time and greeting
- POST `/api/echo` — Accepts JSON and returns it back (with simple validation)

Run locally:

```bash
cd "mini projects/session 6 express mvc task"
npm install
npm start
```

Then visit `http://localhost:3000/api/`.

All responses are JSON and unknown routes return a 404 JSON response.
