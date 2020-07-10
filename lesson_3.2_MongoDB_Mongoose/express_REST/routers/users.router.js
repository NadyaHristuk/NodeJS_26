const { Router } = require('express');
const userRouter = Router();
const {
	validateCreateUser,
	validateUpdateUser,
	validateObjectId
} = require('../helpers/validate');

const {userController} = require('../controllers/user.controller'); //'./user.controller'

// R - Read
userRouter.get('/', userController.getUsers);
userRouter.get('/:id', validateObjectId, userController.getUser);
// C - Create
userRouter.post('/', validateCreateUser, userController.createUser);
// U - Update
userRouter.put('/:id', validateObjectId, validateUpdateUser, userController.updateUser);
// D - Delete
userRouter.delete('/:id', validateObjectId, userController.deleteUser);


module.exports = userRouter;


