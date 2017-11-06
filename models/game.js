// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var gameSchema = new mongoose.Schema({
    name: String,
    description: String
});

// Return model
module.exports = restful.model('Game', gameSchema);