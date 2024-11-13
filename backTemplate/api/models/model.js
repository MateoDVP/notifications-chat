const mongoose = require('mongoose');

const timestamps = require("mongoose-timestamp");
const modelTemplate = mongoose.Schema({
    comment : String,
    customer : String,
    date_review: Date,
    rating: Number,
    title: String,
    asin_parent: String,
  
});

module.exports = mongoose.model('gg_fake_review', modelTemplate);