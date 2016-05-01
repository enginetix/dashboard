'use strict';

var mongoose = require('mongoose');

//making a schema of user authentication collection
var devices = new mongoose.Schema({
	devRegID:String,
	devType:String, 
	devName:String,
	devLocation:String, 
	devHardVer:String, 
	devID:String
});

var model = mongoose.model('devices', devices);

module.exports = model;
