var express = require('express');
var router = express.Router();
const placeController = require('../controllers/placeController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

/* GET home page. */
router.get('/', placeController.homePage);
/*Get Read-only page of places*/
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

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
});

module.exports = router;
