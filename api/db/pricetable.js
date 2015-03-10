var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var ObjectId = Schema.Types.ObjectId;

var PriceTable = new Schema([{
    type:String, // monthly | weekly | inscription
    classes: Number, // Number of classes per week
    price: Number // Cost
  }]);
  
// models
mongoose.model('PriceTable', PriceTable);

//exports
module.exports = mongoose.model('PriceTable');
