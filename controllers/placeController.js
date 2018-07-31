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
                user: req.user,
            });
        }
    });
};

exports.addPlace = (req, res) => {
    res.render('addPlace', {
      title: 'Add Tourist Place',
      isActive: 'places',
      user: req.user,
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

exports.deletePlace = (req, res) => {
    Place.remove(
    { _id: req.params.id },
    err => {
        if (err) {
          console.log(err);
        } else {
          res.redirect('/places');
        }
      },
    );
};

exports.editPlace = (req, res, next) => {
    // use Game model to find the selected document
    Place.findById({ _id: req.params.id }, (err, place) => {
      if (err) {
        console.log(err);
      } else {
        res.render('editPlace', {
          title: 'Edit',
          place,
          isActive: 'places',
          user: req.user,
        });
      }
    });
};
  
exports.updatePlace = (req, res) => {

    Place.update({ _id: req.params.id }, req.body, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/places');
      }
    });
  };

exports.jsonFormat = (req, res) => {
  Place.find({}, (err, place) => {
      if (err) {
          res.render('error');
      } else {
          res.json(place);
      }
  });
};