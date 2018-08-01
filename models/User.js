const mongoose = require('mongoose');
/* reference passport-local-mongoose to make this model usable for managing users */
const passportLocalMongoose = require('passport-local-mongoose');

const findOrCreate = require('mongoose-findorcreate');

/*create the model schema*/
/* username and password are included automatically */
const userSchema = new mongoose.Schema({});
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

/*exports userSchema by referncing to User model*/
module.exports = mongoose.model('User', userSchema);