// Dependencies
var express = require('express');
var router = express.Router();

// Models
var User = require('../models/user');
var Leaderboard = require('../models/leaderboard');
var Game = require('../models/game');

// Routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

Leaderboard.methods(['get', 'put', 'post', 'delete']);
Leaderboard.register(router, '/leaderboard');

Game.methods(['get', 'put', 'post', 'delete']);
Game.register(router, '/game');

// Return router
module.exports = router;