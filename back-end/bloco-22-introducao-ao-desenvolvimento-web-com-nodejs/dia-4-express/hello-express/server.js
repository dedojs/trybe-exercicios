const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.post('/hello', (req, res) => {
  const { name } = req.body
  res.status(200).json({ greeting: `Hello, ${ name }!`});
});

app.listen(3000, () => { console.log ('Ouvindo na porta 3000'); })