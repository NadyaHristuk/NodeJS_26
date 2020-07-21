const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

const connect = require('./db/connect');
const usersRouter = require('./users/users.router');
const contactsRouter = require('./contacts/contacts.router');

const app = express();

const PORT = 3012;

app.use(morgan('combined'));
app.use(express.json());

app.use('/auth/', usersRouter);
app.use('/api/contacts', contactsRouter);

app.use((err, req, res, next) => {
	const { message, status } = err;

	res.status(status || 500).send(message);
});

connect();

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
