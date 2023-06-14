const router = require('express').Router();
// const {Post, User, Comment} = require('../models');

const Comment = require("../../models/Comment");
const Post = require("../../models/Post");
const User = require("../../models/User");


router.get('/', async (req, res) => {
    const rawPosts = await Post.findAll({
      order: [['updatedAt', 'DESC']],
      include: [
        {
          model: Comment,
          attributes: ['body', 'user_id', 'createdAt', 'updatedAt'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const posts = rawPosts.map((rawPost) => {
      return rawPost.get({ plain: true });
    });res.render('home', { posts, loggedIn: req.session.loggedIn });
  });
  
  module.exports = router;