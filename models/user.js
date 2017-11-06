// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
    name: String,
    password: String,
    admin: Boolean
});

// Return model
module.exports = restful.model('User', userSchema);