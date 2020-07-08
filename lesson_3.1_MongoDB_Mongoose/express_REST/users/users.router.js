const { Router } = require('express');
const userRouter = Router();
const {
	validateCreateUser,
	validateUpdateUser
} = require('../helpers/validate');

const {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser
} = require('./user.controller');


userRouter.get('/', getUsers);

userRouter.get('/:id', getUser);

userRouter.post('/', validateCreateUser, createUser);

userRouter.put('/:id', validateUpdateUser, updateUser);

userRouter.delete('/:id', deleteUser);


module.exports = userRouter;


