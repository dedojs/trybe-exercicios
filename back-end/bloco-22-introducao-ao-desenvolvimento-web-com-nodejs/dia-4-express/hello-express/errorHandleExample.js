const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');
const { getSystemErrorMap } = require('util');

const errorMiddleware = require('./error.Middleware')

const app = express();

/*
app.get('/:fileName', async (req, res, next) => {
  try {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf8'));
  } catch (e) {
    next(e);
  }
});
*/

app.get ('/:fileName', [
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  }),
  (err, req, res, next) => {
    if (err.code === 'ENOENT') {
      const newError = new Error(err.message);
      newError.code = 'file+not_found';
      newError.status = 404;
      return next(new Error);
    }
    return next(err);
  }
])

app.use(function (err, req, res, next) {
  res.status(500).json({ error: `Erro: ${err.message}`})
});

app.use(errorMiddleware);

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002')
});