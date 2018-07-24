const mongoose = require('mongoose');

// define a schema for the place model
const placeSchema = new mongoose.Schema({
    place: {
      type: String,
      required: 'Please enter place name',
    },
    city: {
      type: String,
      required: 'Please enter city',
    },
    country: {
      type: String,
      required: 'Please enter country',
    },
    attractions: {
      type: String,
      required: 'Please enter attractions for the place',
    },
  });

module.exports = mongoose.model('Place', placeSchema);
