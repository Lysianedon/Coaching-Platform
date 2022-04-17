const Joi = require("joi");

function validateUserJoi(req, res, next) {
  const validateUser = Joi.object({
    firstName: Joi.string().min(1).max(100).required(),
    lastName: Joi.string().min(1).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(1).max(100).required(),
    currentMood: Joi.string().min(1).max(100),
    desiredMood: Joi.string().min(1).max(100),
    isAdmin: Joi.boolean(),
  });

  const validateUserSchema = validateUser.validate(req.body);

  if (validateUserSchema.error) {
    return res.status(400).json({
      message: validateUserSchema.error.details[0].message,
    });
  }
  next();
}

function validateRessourcesJoi(req, res, next) {
  const validateRessources = Joi.object({
    name: Joi.string().min(1).max(100).required(),
  });

  const validateRessourcesSchema = validateRessources.validate(req.body);

  if (validateRessourcesSchema.error) {
    return res.status(400).json({
      message: validateRessourcesSchema.error.details[0].message,
    });
  }
  next();
}

function validateTaskJoi(req, res, next) {
  const validateTask = Joi.object({
    content: Joi.string().min(1).max(100).required(),
    deadline: Joi.date().required(),
    accomplished: Joi.boolean().required(),
  });

  const validateTaskSchema = validateTask.validate(req.body);
  if (validateTaskSchema.error) {
    return res.status(400).json({
      message: validateTaskSchema.error.details[0].message,
    });
  }
  next();
}

function validateAppointmentJoi(req, res, next) {
  const validateAppointment = Joi.date().required();

  const validateAptSchema = validateAppointment.validate(req.body);

  if (validateAptSchema.error) {
    return res.status(400).json({
      message: validateAptSchema.error.details[0].message,
    });
  }
  next();
}

module.exports = {
  validateUserJoi,
  validateRessourcesJoi,
  validateTaskJoi,
  validateAppointmentJoi,
};
