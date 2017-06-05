'use strict';

const mongoose 	= require('mongoose'),
path 			= require('path'),
config 			= require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
Schema 			= mongoose.Schema,

UserSchema 	= new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('User', UserSchema);