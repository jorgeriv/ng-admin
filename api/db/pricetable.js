var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var ObjectId = Schema.Types.ObjectId;

var PriceTable = new Schema({
  inscription: {type:Number, default:0},
  monthlyPayment:{
    oneDayaWeek: {type:Number, default:0},
    twoDaysaWeek: {type:Number, default:0},
    threeDaysaWeek: {type:Number, default:0},
    fourDaysaWeek: {type:Number, default:0},
    fiveDaysaWeek: {type:Number, default:0}
  },
  weeklyPayment: {
    oneClass: {type:Number, default:0},
    twoClasses: {type:Number, default:0},
    threeClasses: {type:Number, default:0},
    fourClasses: {type:Number, default:0},
    fiveClasses: {type:Number, default:0},
    sixClasses: {type:Number, default:0}
  }
});
// models
mongoose.model('PriceTable', PriceTable);

//exports
module.exports = mongoose.model('PriceTable');
