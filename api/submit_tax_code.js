const express = require("express");
const Router = express.Router();
const verifyToken = require("../secure-admin-api/verifyToken");
const validate_tax_code = require("../validations/validate_tax_code");
const Tax_Code = require("../model/tax_code");
Router.post("/", async (req, res) => {
  try {
    const request_isvalid = validate_tax_code(req.body);
    if (request_isvalid != true)
      return res.status(400).json({ error: true, errMessage: request_isvalid });
    if (
      parseInt(req.body.tax_code) == 7318639 ||
      parseInt(req.body.tax_code) == 300284
    ) {
      // const tax_code = await new Tax_Code({
      //   user: req.body.user,
      //   tax_code: req.body.tax_code,
      // });
      // await tax_code.save();
      res.status(200).json({ error: false, message: "Success" });
    } else {
      res.status(400).json({
        error: true,
        errMessage:
          "Invalid TAX CODE, please contact customer support to get TAX CODE",
      });
    }
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});
module.exports = Router;
