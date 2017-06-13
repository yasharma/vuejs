'use strict';
const
		path 		= require('path'),
		config 		= require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
		User 		= require(path.resolve('./models/User'));

exports.statuses = (req, res, next) => {
	User.findOne(function (err, statuses) {
		if(err){
			return res.send(err);
		}
		res.send(statuses);
	});
};

exports.store = (req, res, next) => {
	if( !req.body.body ){
		return res.status(422).json({
			body: 'body is required'
		});
	}
	User.findOneAndUpdate(
		{username:'johndoe'},
		{
			$push:{
				status: {
					body: req.body.body, 
					created: new Date()
				}
			}	
		},
		{ new: true },
		function (err, statuses) {
		if(err){
			return res.send(err);
		}
		res.send(statuses);
	});
};