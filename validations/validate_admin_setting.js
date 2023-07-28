const Joi = require("joi");
const validate_admin_settings = (req) => {
  const schema = Joi.object({
    admin: Joi.string().required(),
    username: Joi.string().required().max(1000),
    password: Joi.string().required(),
  });
  const result = schema.validate({
    admin: req.admin,
    username: req.username,
    password: req.password,
  });
  if (result.error) return result.error.message;
  return true;
};
module.exports = validate_admin_settings;
