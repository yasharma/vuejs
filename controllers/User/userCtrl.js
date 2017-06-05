'use strict';
const
		path 		= require('path'),
		config 		= require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
		userCtrl 	= require(path.resolve('./models/User'));

exports.skills = (req, res, next) => {
	res.send(['Mongo', 'Express', 'Angular', 'Vue', 'React', 'Webpack']);
};

exports.projects = (req, res, next) => {
	console.log(req.body);
};