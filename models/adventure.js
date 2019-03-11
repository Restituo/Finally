const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adventureSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const Adventure = mongoose.model("Adventure", adventureSchema);

module.exports = Adventure;