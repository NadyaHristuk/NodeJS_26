const {Router} =  require('express');

const {createUser, loginUser, getUsers,   getCurrentUser,
    logOut,} = require('./users.controller');

    const {authorize} = require ('./users.middleware');

const authRouter = Router();

<<<<<<< HEAD
// authRouter.get('/', getUsers);
authRouter.post('/register', createUser);
authRouter.post('/login', loginUser);
=======
authRouter.get('/', getUsers);
authRouter.post('/auth', createUser);
authRouter.post('/login', loginUser);
authRouter.get('/current', authorize, getCurrentUser);
>>>>>>> 29ade477560d8f9bfca3d31b1ca3c53211cd49ad
authRouter.post('/logout', logOut)

module.exports = authRouter;