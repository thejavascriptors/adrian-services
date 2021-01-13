const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  username: String,
  title: String,
  review: String,
  stars: Number,
  foundHelpful: Number
},
  {
    timestamps: true
  }
);

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;