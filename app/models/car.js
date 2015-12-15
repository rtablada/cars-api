var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var CarSchema = new Schema({
  year: {type: String, required: true},
  model: {type: String, required: true},
  make: {type: String, required: true},
});

module.exports = Mongoose.model('Car', CarSchema);
