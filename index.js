'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res, next) => {
  res.status(200).send('Server is Active!');
});

app.get('/person/:name', (req, res, next) => {
  let name = req.params.name;
  res.status(200).send(`Hello ${name}!`);
});

app.get('*', (req, res, next) => {
  res.status(404).send('Not Found');
});


app.listen(PORT, () => {
  console.log(`Server Active on Port: ${PORT}`);
});
