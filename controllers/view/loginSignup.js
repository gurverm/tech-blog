const router = require('express').Router();

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
  } else {
    res.render('login', { disableBtn: true });
  }
});

// remove or disable button ? -> 
// maybe js can do this 

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
  } else {
    res.render('signup', { disableBtn: true });
  }
});

module.exports = router;