'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://' + config.app.db.host + config.app.db.dbName);

module.exports = function(moduleName){
    return require('./'+moduleName);
};
