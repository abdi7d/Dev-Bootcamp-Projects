const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

// Mount API under specific base route
app.use('/api', routes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', path: req.originalUrl });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/api`));
