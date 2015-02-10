var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var Timetable = new Schema({
  place: {trype:ObjectId, ref: 'Place'},
  day: Number,
  timeFrom: String,
  timeTo: String,
  customerId: [{type:ObjectId}]
});

// models
mongoose.model('Timetable', Timetable);

//exports
module.exports = mongoose.model('Timetable');
