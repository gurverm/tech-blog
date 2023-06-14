const viewsRouter  =require('express').Router();
const homeRouter = require('./home');
const dashboardRouter = require('./dashboard');



viewsRouter.use(homeRouter);
viewsRouter.use('./dashboard', dashboardRouter);


module.exports = viewsRouter;