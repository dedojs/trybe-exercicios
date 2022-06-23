const express = require('express');
const middleware = require('../middlewares/index')
const peopleRouter = express.Router();
const services = require('../services/peopleService');

peopleRouter.post('/', middleware.authMiddleware, services.createPeople)

module.exports = { peopleRouter };