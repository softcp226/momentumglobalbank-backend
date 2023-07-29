const express = require("express");
const Router = express.Router();
const verifyToken = require("../secure-admin-api/verifyToken");
const validate_imf_code = require("../validations/validate_imf_code.js");
const Imf_code = require("../model/imf_code");
Router.post("/", async (req, res) => {
  try {
    console.log(req.body.imf_code == 640174);
    console.log(req.body.imf_code);
    const request_isvalid = validate_imf_code(req.body);
    if (request_isvalid != true)
      return res.status(400).json({ error: true, errMessage: request_isvalid });

    if (
      parseInt(req.body.imf_code) == 640174 ||
      parseInt(req.body.imf_code) == 204630
    ) {
      // const imf_code = await new Imf_code({
      //   user: req.body.user,
      //   imf_code: req.body.imf_code,
      // });
      // await imf_code.save();
      return res.status(200).json({ error: false, message: "Success" });
    }
    return res.status(400).json({
      error: true,
      errMessage:
        "Invalid IMF CODE, please contact customer support to get IMF code",
    });

    // else {
    //   res.status(400).json({
    //     error: true,
    //     errMessage:
    //       "Invalid IMF CODE, please contact customer support to get IMF code",
    //   });
    // }
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});
module.exports = Router;
