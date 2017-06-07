'use strict';

const mongoose 	= require('mongoose'),
path 			= require('path'),
config 			= require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
Schema 			= mongoose.Schema,

UserSchema 	= new Schema({
	username: {
		type: String
	},
	email: {
		type: String
	},
	status: [{
		body: {
			type: String
		}	
	}]
},{timestamps: true});

module.exports = mongoose.model('User', UserSchema);