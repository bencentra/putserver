const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

const payload = { success: true };

app.get('/', cors(), (req, res) => {
  res.send('hello world');
});

app.options(/test/, cors());

app.put('/test200', cors(), (req, res) => {
  res.status(200).type('application/json').json(payload);
});

app.put('/test204', cors(), (req, res) => {
  res.status(204).type('application/json').json(payload);
});

app.listen(3000);
