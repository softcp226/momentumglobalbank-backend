const Joi = require("joi");

const validate_imf_code = (req) => {
  const schema = Joi.object({
    user: Joi.string().required().max(1000),
    imf_code: Joi.string().required(),
  });
  const result = schema.validate({ user: req.user, imf_code: req.imf_code });
  if (result.error) return result.error.message;
  return true;
};
module.exports = validate_imf_code;
