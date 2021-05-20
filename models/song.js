// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Song Schema
const songSchema = new Schema(
    {
      title: String,
      artist: String,
      time: String,
      favorite: {type: Boolean, default: false}
    },
    
    { timestamps: true }
  );
  
  // Create our Model Object
  const Song = model("Song", songSchema);

module.exports = Song