const Joi = require('@hapi/joi');

module.exports = {
  registerValidation(data) {
    const schema = Joi.object({
      name: Joi.string().min(2).required(),
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required(),
      gender: Joi.string(),
      birth: Joi.date().required(),
      phone: Joi.string(),
      position: Joi.string(),
    });

    return schema.validate(data);
  },

  loginValidation(data) {
    const schema = Joi.object({
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required()
    });

    return schema.validate(data);
  },

  editValidation(data) {
    const schema = Joi.object({
      name: Joi.string().min(2),
      phone: Joi.string(),
    });

    return schema.validate(data);
  }
}
