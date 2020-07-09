const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(express.static('public'));

// app.get('/', (req, res) => {
// res.send('Hello from API')
// })

const reqHeaders = () => {
	return (req, res, next) => {
		if (req.headers['content-type'] !== 'application/json') {
			res.status(400).send('Not application/json');
		} else {
			next();
		}
	};
};

app.get('/users', (req, res) => {
	res.send('users');
});

app.post('/users', (req, res) => {
	console.log(req.body);
	res.send(req.body.name);
});

app.get('/users/:name/:id', reqHeaders(), (req, res) => {
	res.json({
		name: req.params.name,
		id: req.params.id
	});
});

app.get('/posts', (req, res) => {
	res.send(`lastPosts - ${req.query.lastPosts}   MaxRating-  ${req.query.MaxRating}`);
});

app.listen(3002, () => {
	console.log('Server is runnin on port 3002');
});
