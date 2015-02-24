var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var Payment = new Schema({
  amount: {type:Number, required:true},
  date: {type:Date, default: Date.now},
  description: String,
  Customer: {type:ObjectId, reference: 'Customer'}
});


// models
mongoose.model('Payment', Payment);

//exports
module.exports = mongoose.model('Payment');
