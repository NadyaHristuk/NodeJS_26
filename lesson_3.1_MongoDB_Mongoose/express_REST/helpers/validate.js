const Joi = require('@hapi/joi');

function validateCreateUser(req, res, next) {
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

function validateUpdateUser(req, res, next) {
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

module.exports = {
    validateCreateUser,
    validateUpdateUser
}