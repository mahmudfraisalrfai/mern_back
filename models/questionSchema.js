const mongoose = require("mongoose");
const schema = mongoose.Schema;
const questionSchema = new schema({
  questions: { type: Array, default: [] },
  answers: { type: Array, default: [] },
  createData: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Question", questionSchema);
