const {Router} =  require('express');

const {createUser, loginUser, getUsers} = require('./auth.controller');

const authRouter = Router();

authRouter.get('/', getUsers);
authRouter.post('/auth', createUser);
authRouter.post('/login', loginUser);

module.exports = authRouter;