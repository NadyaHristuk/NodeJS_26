const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

function validateCreateContact(req, res, next) {
	const userSchema = Joi.object({
		name: Joi.string().required(),
		email: Joi.string().required(),
		password: Joi.string().required()
	});
	const result = userSchema.validate(req.body);
	if (result.error) {
		res.status(400).send(result.error);
	}
	next();
}

function validateUpdateContact(req, res, next) {
	const userSchema = Joi.object({
		name: Joi.string(),
		email: Joi.string(),
		password: Joi.string()
	}).min(1);
	const result = userSchema.validate(req.body);
	if (result.error) {
		res.status(400).send(result.error);
	}
    next();
}

function validateObjectId(req, res, next) {
	const objectIdSchema = Joi.object({
		id: Joi.objectId()
	  })
	  const result = objectIdSchema.validate(req.params);
	  if (result.error) {
		  res.status(400).send(result.error);
	  }
	  next();
}

module.exports = {
    validateCreateContact,
	validateUpdateContact,
	validateObjectId
}