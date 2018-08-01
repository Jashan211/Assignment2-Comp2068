/*
Initialize instance of place model to be used in different view connecting to database
include reference to url
*/
const Place = require('../models/Place');
const url = require('url');

//method to render home page view
exports.homePage = (req, res) => {
    res.render('index', 
    { 
        title: 'Tour Guide', 
        user: req.user, 
        isActive: 'home',
    });
};

//Get data from mlab to be displayed on page
exports.getPlaces = (req, res) => {
  //Use model Place to find all documents included in collection
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

//loads page getting information to create new document
exports.addPlace = (req, res) => {
    res.render('addPlace', {
      title: 'Add Tourist Place',
      isActive: 'places',
      user: req.user,
    });
};

//method to create new document by adding data to database
exports.createPlace = async (req, res) => {
    try {
      const place = new Place(req.body);
      await place.save();
      res.redirect('/places');
    } catch (err) {
      console.log(err);
    }
};

//method to delete data from database when delete button pushed
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

// method to load edit page while getting request of editing specific document
exports.editPlace = (req, res, next) => {
  // use Pame model to find the selected document
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
  
//method loads when user edit a place to update changes in database
exports.updatePlace = (req, res) => {
    Place.update({ _id: req.params.id }, req.body, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/places');
      }
    });
  };

// this method is for api returning data in json format
exports.jsonFormat = (req, res) => {
  //get mlab data using model
  Place.find({}, (err, place) => {
      if (err) {
          res.render('error');
      } else {
        //return data in json format
          res.json(place);
      }
  });
};