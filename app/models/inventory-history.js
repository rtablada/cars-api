var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var InventoryHistorySchema = new Schema({
  checkOut: {type: Date},
  checkIn: {type: Date},
  inventoryGroup: {type: Schema.Types.ObjectId, ref: 'InventoryGroup'},
});

module.exports = Mongoose.model('InventoryHistory', InventoryHistorySchema);
