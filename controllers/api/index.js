const userRouter = require('./userRoutes.js');
const commentRouter = require('./commentRoutes.js');
const postRouter = require('./postRoutes.js');


const apiRouter = require('express').Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/comment', commentRouter);
apiRouter.use('/post', postRouter);

module.exports = apiRouter;