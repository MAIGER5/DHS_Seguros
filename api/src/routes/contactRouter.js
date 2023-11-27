const { Router } = require('express');
const newContactHandler = require('../handlers/newContactHandler');


const contactRouter = Router();

contactRouter.post('/', newContactHandler)

module.exports = contactRouter;