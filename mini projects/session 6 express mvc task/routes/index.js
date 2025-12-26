const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Routes are only responsible for routing; controllers handle logic
router.get('/', mainController.home);
router.get('/about', mainController.about);
router.get('/contact', mainController.contact);
router.get('/time', mainController.time);
router.post('/echo', mainController.echo);

module.exports = router;
