var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var Timetable = new Schema({
  place: {type:ObjectId, ref: 'Place'},
  day: Number,
  from: String,
  to: String,
  customerId: [{type:ObjectId}]
});

// models
mongoose.model('Timetable', Timetable);

//exports
module.exports = mongoose.model('Timetable');
