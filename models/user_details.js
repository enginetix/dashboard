'use strict';

var mongoose = require('mongoose');

//making a schema of user authentication collection
var user_details = new mongoose.Schema({
	userID: String,
	userPass: String,
	userEmail: String,
	userID: String,
	userName: String,
	userRole: String,
	userMob: String,
	userPic: String,
	userEmail: String,
	userGCM: String,
	deviceIDs: [String],
	splans:
		[{
		splanName: String,
		splanCost: Number,
		splanCycle: Number,
		splanStart: Date,
		splanTenure: Number
		}],
	wdgtUsed:
		[{	
			wdgtID : String,
			devID: String
		}],
	triggers:
		[{
			trigName: String,
			trigCondition: String,
			trigSuccessMsg: String,
			tDevID: String
		}]
});

var model = mongoose.model('user_details', user_details);

module.exports = model;
