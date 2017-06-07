"use strict";

const 	express 	= require('express'),
		path 		= require('path'),
		config 		= require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
		projectCtrl = require(path.resolve('./controllers/User/projectCtrl')),
		userCtrl 	= require(path.resolve('./controllers/User/userCtrl')),
		router 		= express.Router();

router.post('/projects', projectCtrl.projects);
router.get('/statuses', userCtrl.statuses);

module.exports = {
	router: router
};