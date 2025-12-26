const dataModel = require('../models/dataModel');

exports.home = (req, res) => {
  res.json({ status: 'success', data: { message: 'Welcome to the Express MVC server', route: '/api/' } });
};

exports.about = (req, res) => {
  res.json({ status: 'success', data: { info: 'This is a simple Express MVC example.' } });
};

exports.contact = (req, res) => {
  res.json({ status: 'success', data: { email: 'contact@example.com', phone: '+1234567890' } });
};

exports.time = (req, res) => {
  const now = new Date();
  const hour = now.getHours();
  let greeting = 'Hello';
  if (hour < 12) greeting = 'Good morning';
  else if (hour < 18) greeting = 'Good afternoon';
  else greeting = 'Good evening';

  res.json({ status: 'success', data: { time: now.toISOString(), greeting } });
};

exports.echo = (req, res) => {
  const payload = req.body;
  const validation = dataModel.validatePayload(payload);
  if (!validation.valid) {
    return res.status(400).json({ status: 'error', error: validation.message });
  }

  const saved = dataModel.save(payload);
  res.json({ status: 'success', data: { received: payload, savedId: saved.id, receivedAt: new Date().toISOString() } });
};
