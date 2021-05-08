const { validate, Joi } = require('express-validation');

exports.validateUserModel = validate({
  body: Joi.object({
    
  })
}, {}, {});

exports.validatePermitions = validate({
  headers: Joi.object({
    authorization: Joi.string().required().valid('admin')
  }).options({ allowUnknown: true })
}, {}, {});