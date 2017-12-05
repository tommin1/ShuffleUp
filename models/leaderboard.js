// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var leaderboardSchema = new mongoose.Schema({
    name: String,
    cash: Number,
    userId: String
});

// Return model
module.exports = restful.model('Leaderboard', leaderboardSchema);
