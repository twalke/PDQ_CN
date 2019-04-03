const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  name: String,
  currentBeer: String,
  currentThought: String,
  daydream: String
});

module.exports = mongoose.model("Thought", thoughtSchema)
