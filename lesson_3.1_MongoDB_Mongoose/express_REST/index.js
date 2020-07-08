const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const userRouter = require('./users/users.router')

const app = express();

const PORT = 3011;

app.use(morgan('combined'));
app.use(express.json());

app.use('/api/users/', userRouter);

app.use((err, req, res, next) => {
	const { message, status } = err;

	res.status(status || 500).send(message);
});

mongoose.connect(process.env.MONGO_URL,  {
  useNewUrlParser: true,
	 useUnifiedTopology: true,
	  useCreateIndex: true
}, (err) => {
        if (err) { process.exit(1) }
        console.log("Database connection successful");
 })

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
