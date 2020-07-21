const express = require('express');
const multer = require('multer');
const path = require('path');

// const upload = multer({ dest: './uploads/' });

const storage = multer.diskStorage({
	destination: './up',
	filename: function(req, file, cb) {
		// console.log('file', file);
		// const { ext } = path.parse(file.originalname);
		// // console.log('req.file.originalname', req.file.originalname);
		// // console.log('ext', ext);
		// cb(null, Date.now() + ext);
		cb(null, Date.now() + '_' + file.originalname);
	}
});


const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	} else {	
		cb('Type file is not access', false);
	}
};

const upload = multer({
	storage,
	fileFilter,
	limits: 5 //5Mb
});

const PORT = 3000;

const app = express();

app.use(express.static('static'));

app.post(
	'/upload',
	upload.single('avatar'),
	(req, res, next) => {
		// console.log('req.file', req.file);
		// console.log('req.body', req.body);

		res.status(200).send();
	}
);

app.listen(PORT, () => {
	console.log('Server started listening on port', PORT);
});

// const storage = multer.diskStorage({
// 	destination: 'uploads',
// 	filename: function(req, file, cb) {
// 		// console.log('file', file);
// 		// const { ext } = path.parse(file.originalname);
// 		// cb(null, Date.now() + ext);
// 		cb(null, Date.now() + '_' + file.originalname);
// 	}
// });

// const fileFilter = (req, file, cb) => {
// 	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
// 		cb(null, true);
// 	} else {
// 		cb('Type file is not access', false);
// 	}
// };

// const upload = multer({
// 	storage,
// 	fileFilter,
// 	limits: 5 //5Mb
// });


// const NewUser = {
// 	img : './up/1595356918530_blue.jpg',
// 	name: ''
// }