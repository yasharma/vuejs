'use strict';
const
		path 		= require('path'),
		config 		= require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
		User 		= require(path.resolve('./models/User'));

exports.skills = (req, res, next) => {
	res.send(['Mongo', 'Express', 'Angular', 'Vue', 'React', 'Webpack']);
};

exports.projects = (req, res, next) => {
	if( !req.body.name && !req.body.description ){
		return res.status(422).json({
			name: 'name is required',
			description: 'description is required'
		});
	}
	let project = new User(req.body);
	project.save(function (err, response) {
		if(err){
			return res.send(err);
		}
		res.json({result:response, message: 'Project created!'});
	});
};