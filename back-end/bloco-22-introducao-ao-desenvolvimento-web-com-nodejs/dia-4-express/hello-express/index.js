const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

app.get('/open', function(req, res) {
  res.send('open!')
});

app.get('/fechado', authMiddleware, function (req, res) {
  res.send('closed!')
});

const drinksRouter = require('./drinksRouter');

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

app.use('/drinks', drinksRouter)

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001')
})