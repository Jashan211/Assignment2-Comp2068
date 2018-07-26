const mongoose = require('mongoose');
/* reference passport-local-mongoose to make this model usable for managing users */
const passportLocalMongoose = require('passport-local-mongoose');

/*create the model schema*/
/* username and password are included automatically */
const userSchema = new mongoose.Schema({});
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);