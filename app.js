require('dotenv').config({
  path: './.env',
});
const path = require('path');
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/dist')));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
