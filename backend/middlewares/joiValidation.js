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

  if (validateUser.error) {
    return res.status(400).json({
      message: validateUser.error.details[0].message,
    });
  }
  next();
}

function validateRessourcesJoi(req, res, next) {
  const validateRessources = Joi.object({
    name: Joi.string().min(1).max(100).required(),
  });

  if (validateRessources.error) {
    return res.status(400).json({
      message: validateRessources.error.details[0].message,
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

  if (validateTask.error) {
    return res.status(400).json({
      message: validateTask.error.details[0].message,
    });
  }

  next();
}

function validateAppointmentJoi(req, res, next) {
  const validateAppointment = Joi.date().required();
  if (validateAppointment.error) {
    return res.status(400).json({
      message: validateAppointment.error.details[0].message,
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
