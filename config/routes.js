"use strict";

const 	express 	= require('express'),
		path 		= require('path'),
		config 		= require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
		userCtrl 	= require(path.resolve('./controllers/User/userCtrl')),
		router 		= express.Router();

router.get('/skills', userCtrl.skills);
router.post('/projects', userCtrl.projects);

module.exports = {
	router: router
};