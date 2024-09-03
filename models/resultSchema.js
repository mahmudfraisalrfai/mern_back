const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const resultSchame = new Schema({
  username: { type: String },
  result: { type: Array, default: [] },
  attempts: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  achived: { type: String, default: "" },
  createDate: { type: Date, default: Date.now },
});
module.exports = mongoose.model("result", resultSchame);
