const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const authUser = require('../../utils/auth.js');

router.get('/:id', authUser, async (req, res) => {
  const rawPost = await Post.findByPk(req.params.id, {
    //posts displayed in the correct order on the blog page
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
  const post = await rawPost.get({ plain: true });
  const postOwner = post.user_id === req.session.userId;
    // render to desired handlebars page 

  res.render('post', { post, loggedIn: req.session.loggedIn, postOwner });
});

module.exports = router;