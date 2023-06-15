const router = require('express').Router();
// const {Post, User, Comment} = require('../models');

const {Comment} = require("../../models");
const {Post} = require("../../models");
const {User} = require("../../models");

const withAuth = require('../../utils/auth.js');


router.get('/', withAuth, async (req, res) => {
    const userData = await User.findByPk(req.session.userId, {
      attributes: ['username', 'email'],
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'body', 'createdAt', 'updatedAt'],
        },
        {
          model: Comment,
          attributes: ['body', 'createdAt', 'updatedAt'],
          include: {
            model: Post,
            attributes: ['title', 'id'],
            include: {
              model: User,
              attributes: ['username'],
            },
          },
        },
      ],
      order: [[Post, 'updatedAt', 'DESC'],
        [Comment, 'updatedAt', 'DESC'],],
    });
    //serialize data
    const user = await userData.get({ plain: true });
    // render to desired handlebars page 

    res.render('dashboard', { loggedIn: req.session.loggedIn, data: user });
  });
  
  module.exports = router;