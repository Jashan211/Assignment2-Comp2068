const passport = require('passport');
const User = require('../models/User');

exports.register = (req, res) => {
  res.render('register', { title: 'Register', warning: '', messages: '', user: req.user, isActive: 'register', });
};

exports.registerUser = (req, res, next) => {
  const newUser = new User({ username: req.body.username });

  User.register(newUser, req.body.password, (err, account) => {
    if (err) {
      // needed to say 'return' below otherwise node will complain that headers already sent.
      return res.render('register', {
        title: 'Register',
        warning: 'Sorry, that username already exists.  Try again.',
        user: req.user,
        isActive: 'register',
      });
    }
    /* if successful */
    res.redirect('/login');
  });
};

exports.login = (req, res) => {
  const messages = req.session.messages || [];

  // clear session message
  req.session.messages = [];

  res.render('login', {
    title: 'Login',
    messages,
    isActive: 'login',
    user: req.user,
  });
};
