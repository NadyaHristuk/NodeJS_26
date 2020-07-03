const express = require('express');
const morgan = require('morgan');
const Joi = require('@hapi/joi');
const uuid = require('uuid');

const app = express();

const PORT = 3010;

const users = [ {
        "name": "Anya",
        "email": "anya@google.com",
        "password": "123",
        "id": "4a6961b2-415a-4b5b-91ef-67c7993b4737"
    },
    {
        "name": "Anya1",
        "email": "anya1@google.com",
        "password": "1231",
        "id": "ab4879d5-d0ce-4d33-875e-abe73adf0558"
    },
    {
        "name": "Anya12",
        "email": "anya12@google.com",
        "password": "12312",
        "id": "f49e2870-b525-47c8-b02e-acd8bd52ceec"
    }];

app.use(morgan('combined'));
app.use(express.json());

// R - Read
app.get('/users', getUsers)

function  getUsers(req, res) {
    res.send(users);
}

app.get('/users/:id', getUser)

function getUser(req, res) {
    const { id } = req.params;
    
    const requestedUser = users.find((user) => user.id === id);

    if (!requestedUser) {
        const err = new Error(`User with id ${id} does not exist`);
		err.status = 404;
		throw err;
    }

    res.send(requestedUser)
}

// C - Create
// 1. validate request body { name, email, password } 
// 2. create unique id 
// 3. save user in backend 
// 4. send successfull response (201)

app.post('/users', validateCreateUser, createUser )

function validateCreateUser (req, res, next) {
    const userSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    })
    const result = userSchema.validate(req.body);
    if (result.error) {
        res.status(400).send(result.error)
    }
    next()
}

function createUser(req, res) {
    const id = uuid.v4();

    const newUser = {
        ...req.body,
        id
    };

    users.push(newUser);

    res.status(201).send(newUser);  
}

// U - Update
// 1. validate request body
// 2. find user with provided id
// 3. if user does not exist - return 404
// 4. update user
// 5. return successfull response
app.put('/users/:id', validateUpdateUser, updateUser) 

function validateUpdateUser(req, res, next) {
    const userSchema = Joi.object({
        name: Joi.string(),
        email: Joi.string(),
        password: Joi.string()
    }).min(1);
    const result = userSchema.validate(req.body);
    if (result.error) {
        res.status(400).send(result.error)
    }
    next()
}

function updateUser(req, res) {
    const { id } = req.params;
    
    // const requestedUser = users.find((user) => user.id === id);

    const userIndex = users.findIndex((user) => user.id === id);

    users[userIndex] = {
        ...users[userIndex],
        ...req.body
    };

    res.send(users[userIndex]);
}

// D - Delete
// 1. find user with provided id
// 2. if user does not exist - return 404
// 3. delete user
// 4. return successfull response
app.delete('/users/:id', deleteUser)

function deleteUser(req, res) {
    const { id } = req.params;

    const userIndex = users.findIndex((user) => user.id === id);

    users.splice(userIndex, 1);

    res.status(204).send();
}

app.use((err, req, res, next) => {
	const { message, status } = err;

	res.status(status || 500).send(message);
});

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)} )