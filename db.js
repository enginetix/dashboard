'use strict';
console.log("db.js running");

var mongoose = require('mongoose');
var user_auth = require('./models/user_auth');
var user_details = require('./models/user_details');
var devices = require('./models/devices');
var widgets = require('./models/widgets');

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


user_details.create({
	userID: 'rockyb',
	userName:'Rocky Balboa',
	userRole:'Viewer',
	userMob:'8765987949',
	userPic:'path2pic',
	userEmail: 'rocky@faclon.com',
	userGCM: '609612932495',
	deviceIDs: ['D0XYZ1','D0ABC2'],
	splans:
		[{
		splanName: 'Water Analytics',
		splanCost: 500,
		splanCycle: 30,
		splanStart: Date('2016-04-31'),
		splanTenure: 5},
		{
		splanName: 'Water Analytics lvl2',
		splanCost: 5000,
		splanCycle: 15,
		splanStart: Date('2016-04-31'),
		splanTenure: 5
		}],
	wdgtUsed:[{wdgtID : 'W001',
			devID: 'D0XYZ1'},
			{wdgtID : 'W001',
			devID: 'D0XYZ2'}],
	triggers:[{
		trigName:'Tank filled',
		trigCondition: 'If (height >= 95%)',
		trigSuccessMsg:'Tank is full',
		tDevID:'D0XYZ1'
		},
		{
		trigName:'Tank empty',
		trigCondition: 'If (height<= 10%)',
		trigSuccessMsg:'Tank is empty',
		tDevID:'D0ABC2'
		}]
});

devices.create({
	devRegID:'123455',
	devType: 'water',
	devName:'Water level sensor',
	devLocation: 'Bari Sadri',
	devHardVer: '2.0.1',
	devID: 'D0XYZ1'
});

devices.create({
	devRegID:'123432',
	devType: 'water',
	devName:'Water level sensor',
	devLocation: 'Bhandup West',
	devHardVer: '2.0.2',
	devID: 'D0XYZ1'
});

widgets.create({
	wdgtID: 'W001',
	wdgtName: 'Tank filling',
	wdgtDType: ['water']
});

console.log("All data written to database, check in another tab");