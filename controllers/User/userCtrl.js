'use strict';
const
		path 		= require('path'),
		config 		= require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
		User 		= require(path.resolve('./models/User'));

exports.statuses = (req, res, next) => {
	User.find(function (err, statuses) {
		if(err){
			return res.send(err);
		}
		res.send(statuses);
	});
};