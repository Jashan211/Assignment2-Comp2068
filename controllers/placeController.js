const Place = require('../models/Place');
const url = require('url');

exports.homePage = (req, res) => {
    res.render('index', 
    { 
        title: 'Tour Guide', 
        user: req.user, 
        isActive: 'home',
    });
};

exports.getPlaces = (req, res) => {

    Place.find((err, places) => {
        if (err) {
            res.render('error');
        } else {
            res.render('places', {
                title: 'Tourist Places',
                places,
                isActive: 'places',
            });
        }
    });
};

exports.addPlace = (req, res) => {
    res.render('addPlace', {
      title: 'Add Tourist Place',
      isActive: 'places',
    });
};
  
exports.createPlace = async (req, res) => {
    try {
      const place = new Place(req.body);
      await place.save();
      res.redirect('/places');
    } catch (err) {
      console.log(err);
    }
};