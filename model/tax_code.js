const connectDB = require("./dbConnector");
const mongoose = require("mongoose");
const user = require("./user");

const tax_code_Schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  tax_code: {
    type: String,
    required: true,
  },
});

const Tax_Code = mongoose.model("Tax_Code", tax_code_Schema);
module.exports = Tax_Code;
