const { Router } = require('express');
const videoRouter = require('./videoRouter');
const contactRouter = require('./contactRouter');

const mainRouter = Router();


mainRouter.use('/contact', contactRouter );
mainRouter.use('/video', videoRouter)

module.exports = mainRouter;