var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var = new Schema({
  name: {type:String, required:true},
  capacity: {type:Number: default: 10}
});
