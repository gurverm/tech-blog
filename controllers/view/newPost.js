const router = require('express').Router();
const withAuth = require('../../utils/auth.js');

router.get('/', withAuth, (req, res) => {
    // render to desired handlebars page 
  res.render('newPost', {
    userId: req.session.userId,
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;