const express = require('express');
const app = express();
const routes = require('./routes/index');
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use our routes
app.use('/', routes);

// Bonus: Handle unknown routes (404)
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});