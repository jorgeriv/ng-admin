global.config = require('konfig')();

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./api/routes');

//Middleware
app.use(express.static(path.join(__dirname, 'app')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/.tmp', express.static(path.join(__dirname, '.tmp')));
// parse application/json
app.use(bodyParser.json());
routes(app);

app.listen(3000);
console.log('Express server listening at port 3000');
