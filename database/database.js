const mongoose = require("mongoose");
async function conected() {
  await mongoose.connect(process.env.MONGODB);
  console.log("conect database");
}
module.exports = conected;
