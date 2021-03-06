'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

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
  payments: [{type: ObjectId, ref:'Payment'}],
  attendance:[{
    time: { type:ObjectId, ref: 'Timetable'},
    date: { type: Date, default: Date.now },
    reposition: Boolean
  }],
  photo:  { data: Buffer, contentType: String }
  //schedule:[{type:ObjectId, reference:'Timetable'}], // reference in Timetable
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
