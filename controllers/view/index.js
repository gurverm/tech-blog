const viewsRouter  =require('express').Router();
const homeRouter = require('./home.js');
const dashboardRouter = require('./dashboard.js');
const loginSignupRouter = require('./loginSignup.js');
const newPostRouter = require('./newPost.js');
const postRouter = require('./post.js');

viewsRouter.use(homeRouter);
viewsRouter.use('/dashboard', dashboardRouter);
viewsRouter.use(loginSignupRouter);
viewsRouter.use('/newPost', newPostRouter);
viewsRouter.use('/post',postRouter);

module.exports = viewsRouter;