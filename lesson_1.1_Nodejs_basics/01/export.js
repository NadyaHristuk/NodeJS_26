const a = 2;
const b = [];
// module.exports = a; //2

function square(num) {
	console.log(num * num);
}

function text() {
	console.log('Some text');
}

module.exports = {
	a,
	text,
	square,
	b
};

// exports.b = 2;
