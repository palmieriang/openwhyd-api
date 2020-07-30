const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const axios = require('axios');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/media', async (req, res) => {
  const response = await  axios(`https://openwhyd.org/hot/${req.query.genre}?format=json`)

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(response.data));
});

const port = 4000;

app.listen(port, () =>
  console.log(`Express server is running on http://localhost:${port}`)
);
