var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var = new Schema({
  place: {trype:ObjectId, ref: 'Place'},
  time: String,
  customerId: [{type:ObjectId}]
});
