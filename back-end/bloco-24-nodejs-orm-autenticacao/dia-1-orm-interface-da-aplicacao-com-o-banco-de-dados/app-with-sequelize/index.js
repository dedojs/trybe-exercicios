const express = require('express');
const router = require('./controllers/userController');

const userController = require('./controllers/userController');

const app = express();
app.use(router)

const PORT = process.env.PORT || 3001;

app.use(express.json());

router.get('/user', userController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));