'use strict';
console.log("db.js running");

var mongoose = require('mongoose');
var user_auth = require('./models/user_auth');

mongoose.connect('mongodb://localhost/faclon_mongo', function(err) {
  if (err) {
    console.log('Failed connecting to Faclon DB!');
  } else {
    console.log('Successfully connected to Faclon DB!');
  }
});
	

//Inserting a document into user_auth collection
user_auth.create({
	userID: 'rockyb',
	userPass:'hellokitty',
	userEmail: 'rocky@faclon.com'
});


