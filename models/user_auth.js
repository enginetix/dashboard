'use strict';

var mongoose = require('mongoose');

//making a schema of user authentication collection
var user_auth = new mongoose.Schema({
	userID: String,
	userPass: String,
	userEmail: String,
});

var model = mongoose.model('user_auth', user_auth);

module.exports = model;
