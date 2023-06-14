const userRouter = require('./userRoutes.js');
const commentRouter = require('./commentRoutes.js');


apiRouter = require('express').Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/comment', commentRouter);

module.exports = apiRouter;