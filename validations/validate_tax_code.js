const Joi = require("joi");

const validate_tax_code = (req) => {
  const schema = Joi.object({
    user: Joi.string().required().max(1000),
    tax_code: Joi.string().required(),
  });
  const result = schema.validate({ user: req.user, tax_code: req.tax_code });
  if (result.error) return result.error.message;
  return true;
};
module.exports = validate_tax_code;
