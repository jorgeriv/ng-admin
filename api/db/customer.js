'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.types.ObjectId;

var Customer = new Schema({
  name:  {type: String, required: true},
  phone: Number,
  address: {type: String},
  email: String,
  emName: String,
  emPhone: Number,
  date: { type: Date, default: Date.now },
  active: {type:Boolean, default:true},
  listNo: {type:Number, index:true},
  payments: [{type: ObjectId, reference:'Payment'}],
  attendance:[{
    time: { type:ObjectId, reference: 'Timetable'},
    date: { type: Date, default: Date.now }
  }],
  schedule:[{type:ObjectId, reference:'Timetable'}],
  repositions: [{schedule: {type:ObjectId, reference:'Timetable'}, date: {type: Date, default: Date.now}}]
});

Customer.methods.insertInc = function(cb) {
  var that = this;
  this.model('Customer').find( {}, { listNo: 1 } ).sort( { listNo: -1 } ).limit(1).exec(function(err, doc){
    if(err){
      return console.log(err);
    }
    var seq = doc.length === 0 ?  1 : doc[0].listNo + 1;

    that.listNo = seq;

    that.save(cb);
  });
};
// models
mongoose.model('Customer', Customer);

//exports
module.exports = mongoose.model('Customer');
