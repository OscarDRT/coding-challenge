const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

// definition of the model for authenticating users
const userSchema = new mongoose.Schema({
    local: {
        email: String,
        password: String
    }
});

// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};
  
// create the model for user and expose it to our app
module.exports = mongoose.model('User', userSchema);