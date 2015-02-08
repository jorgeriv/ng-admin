var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var ObjectId = Schema.Types.ObjectId;

var Place = new Schema({
  name: {type:String, required:true},
  capacity: {type:Number, default: 10}
});

// models
mongoose.model('Place', Place);

//exports
module.exports = mongoose.model('Place');
