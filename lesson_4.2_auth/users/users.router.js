const {Router} =  require('express');

const {createUser, loginUser, getUsers,   getCurrentUser,
    logOut,} = require('./users.controller');

    const {authorize} = require ('./users.middleware');

const authRouter = Router();

// authRouter.get('/', getUsers);
authRouter.post('/register', createUser);
authRouter.post('/login', loginUser);
authRouter.post('/logout', logOut)

module.exports = authRouter;