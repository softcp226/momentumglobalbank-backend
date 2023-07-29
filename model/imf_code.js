const connectDB = require("./dbConnector");
const mongoose = require("mongoose");
const user = require("./user");

const imf_code_Schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  imf_code: {
    type: String,
    required: true,
  },
});

const Imf_code = mongoose.model("Imf_code", imf_code_Schema);
module.exports = Imf_code;
