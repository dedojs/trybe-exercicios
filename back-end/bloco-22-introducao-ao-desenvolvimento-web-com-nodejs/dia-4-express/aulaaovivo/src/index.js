const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('../routes/peopleRouter');
const rescue = require('express-rescue');
const middlewares = require('../middlewares/index')

app.use(bodyParser.json())
app.use('/people', rescue(routes.peopleRouter));
app.use(middlewares.errorMiddleware);

app.listen(3000);