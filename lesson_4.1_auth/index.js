const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

const connect = require('./db/connect');
const authRouter = require('./auth/auth.router');

const app = express();

const PORT = 3012;

app.use(morgan('combined'));
app.use(express.json());

app.use('/api/', authRouter);

app.use((err, req, res, next) => {
	const { message, status } = err;

	res.status(status || 500).send(message);
});

connect();

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
