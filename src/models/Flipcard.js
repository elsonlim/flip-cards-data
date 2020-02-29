const mongoose = require("mongoose");

const flipcardSchema = new mongoose.Schema({
  index: {
    type: Number,
    unique: true,
  },
  tags: [String],
  text: String,
  reading: String,
  furigana: [],
  english: String,
});

module.exports = mongoose.model("FlipCard", flipcardSchema);
