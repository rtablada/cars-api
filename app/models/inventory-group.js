var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var InventoryGroupSchema = new Schema({
  totalAvailability: {type: Number},
  car: {type: Schema.Types.ObjectId, ref: 'Car'},
  InventoryHistory: [{type: Schema.Types.ObjectId, ref: 'InventoryHistory'}],
});

module.exports = Mongoose.model('InventoryGroup', InventoryGroupSchema);
