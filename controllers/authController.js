/*
  This controller contain functions related to authenticating users account
  Initialize passport, mongoose and User Instance
  Different exports method to load view for different login and authenticating users
*/
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.isLoggedIn = (req, res, next) => {
  // first check if user is authenticated
  if (req.isAuthenticated()) {
    next();
    return;
  }
  res.redirect('/login');
};

exports.login = passport.authenticate('local', {
  successRedirect: '/places',
  failureRedirect: '/login',
  failureMessage: 'Invalid Login',
});

exports.googlePre = passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read'
  ]
});

exports.googlePost = passport.authenticate('google', {
  successRedirect: '/places',
  failureRedirect: '/login'
});

exports.microsoftPre = passport.authenticate('windowslive', {
  scope: ['wl.signin', 'wl.basic', 'wl.emails'],
});

exports.microsoftPost = passport.authenticate('windowslive', { 
  failureRedirect: '/login' });
  
exports.microsoftLog = function(req, res) {
    // Successful authentication, redirect places.
    res.redirect('/places');
};
