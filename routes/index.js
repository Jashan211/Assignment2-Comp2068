/*
It contains the routes for linking the controller to the view for corresponding pages.
*/
var express = require('express');
var router = express.Router();

/* Refer to controller containing functions of route connecting pages*/
const placeController = require('../controllers/placeController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

/* GET page according by calling corresponding function in the controller. */
router.get('/', placeController.homePage);
router.get('/places', placeController.getPlaces);
router.get('/add', authController.isLoggedIn, placeController.addPlace);
router.post('/add', placeController.createPlace);
router.get('/places/delete/:id', authController.isLoggedIn, placeController.deletePlace);
router.get('/places/edit/:id', authController.isLoggedIn, placeController.editPlace);
router.post('/places/edit/:id', placeController.updatePlace);
router.get('/register', userController.register);
router.post('/register', userController.registerUser);
router.get('/login', userController.login);
router.post('/login', authController.login);
router.get('/google', authController.googlePre);
router.get('/google/callback', authController.googlePost);
router.get('/microsoft', authController.microsoftPre);
router.get('/microsoft/callback', authController.microsoftPost, authController.microsoftLog);
router.get('/jsonFormat', placeController.jsonFormat);
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
});

module.exports = router;
