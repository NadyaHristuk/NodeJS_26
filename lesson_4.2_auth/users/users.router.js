const {Router} =  require('express');

const {createUser, loginUser, getUsers,   getCurrentUser,
    logOut,} = require('./users.controller');

    const {authorize} = require ('./users.middleware');

const authRouter = Router();

authRouter.get('/', getUsers);
authRouter.post('/auth', createUser);
authRouter.post('/login', loginUser);
authRouter.get('/current', authorize, getCurrentUser);
authRouter.post('/logout', logOut)

module.exports = authRouter;