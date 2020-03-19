const Joi = require('@hapi/joi');

module.exports = {
  registerValidation(data) {
    const schema = Joi.object({
      name: Joi.string().min(2).required(),
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required(),
      avatar_url: Joi.string(),
      sex: Joi.string(),
      birth: Joi.date().required(),
      phone: Joi.string(),
    });

    return schema.validate(data);
  },

  loginValidation(data) {
    const schema = Joi.object({
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required()
    });

    return schema.validate(data);
  }
}
