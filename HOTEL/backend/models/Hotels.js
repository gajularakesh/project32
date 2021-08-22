const mongoose = require("mongoose");


const HotelsSchema = new mongoose.Schema({
  hotelname: {
    type: String,
    required: true,
    min: 6,
    max: 15,
  },
  hotelurl: {
    type: String,
    required: true,
  },
  hoteladdress: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  rating:{
    type: Number,
    required: true,
  },
  lattitude:{
    type: Number,
    required: true,
  },
  langitude: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("Hotels", HotelsSchema);