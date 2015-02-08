var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var payments = new Schema({
  amount: Number,
  date: {type:Date, default: Date.now}
  description: String,
  Customer: ObjectId
});
