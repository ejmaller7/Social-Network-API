const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

mongoose.connection.once('open', () => {
  console.log('Test');
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
