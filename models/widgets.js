'use strict';

var mongoose = require('mongoose');

//making a schema of user authentication collection
var widgets = new mongoose.Schema({
	wdgtID: String,
	wdgtName: String,
	wdgtDType: [String]
});

var model = mongoose.model('widgets', widgets);

module.exports = model;