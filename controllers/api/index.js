const userRouter = require('./userRoutes.js');

apiRouter = require('express').Router();

apiRouter.use('/user', userRouter);

module.exports = apiRouter;