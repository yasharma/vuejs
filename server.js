'use strict';
/*
* All the required node packages
*/
const express 	= require('express'),
	app 		= express(),
	path 		= require('path'),
	bodyParser 	= require('body-parser'),
	mongoose 	= require('mongoose'),
	routes 		= require(path.resolve('./config/routes')),
	config 		= require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
	http 		= require('http').Server(app);

mongoose.Promise = global.Promise;
mongoose.set('debug', config.db.DEBUG);
mongoose.connect(config.db.URL, {autoReconnect: true});

app.use(express.static(path.resolve('./src')));
app.set('views', path.join(__dirname, '/src'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Register all your routes */
app.use('/api', routes.router);

/*
* Start the node server using node 'http' package
*/
http.listen(config.server.PORT, () => {
    console.log(`Listening on server port:${config.server.PORT}`);
});
