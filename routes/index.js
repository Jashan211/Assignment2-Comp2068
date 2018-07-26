var express = require('express');
var router = express.Router();
const placeController = require('../controllers/placeController');

/* GET home page. */
router.get('/', placeController.homePage);
/*Get Read-only page of places*/
router.get('/places', placeController.getPlaces);

router.get('/add', placeController.addPlace);
router.post('/add', placeController.createPlace);

router.get('/places/delete/:id', placeController.deletePlace);

router.get('/places/edit/:id', placeController.editPlace);
router.post('/places/edit/:id', placeController.updatePlace);

module.exports = router;
