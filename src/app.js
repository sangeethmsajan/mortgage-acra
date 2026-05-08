const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());

app.use('/api', routes);

module.exports = app;
