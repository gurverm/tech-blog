const viewsRouter  =require('express').Router();
const homeRouter = require('./home.js');
const dashboardRouter = require('./dashboard.js');
const loginSignupRouter = require('./loginSignup.js');


viewsRouter.use(homeRouter);
viewsRouter.use('./dashboard', dashboardRouter);
viewsRouter.use(loginSignupRouter);


module.exports = viewsRouter;