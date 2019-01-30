const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Celebrity
let Car = new Schema({
  car_brand: {
    type: String
  },
  car_year: {
    type: Number
  },
  car_color: {
    type: String
  },
  car_about: {
    type: String
  }
},{
    collection: 'car'
});

module.exports = mongoose.model('Car', Car);