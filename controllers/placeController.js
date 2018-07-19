const Place = require('../models/Place');

exports.homePage = (req, res) => {
    res.render('index', 
    { 
        title: 'Home', 
        user: req.user, 
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
            });
        }
    });
};

