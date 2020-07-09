const colors = require('colors');

// const text

// console.log('Server is running!'.red);

// console.log(process.execPath);
// console.log(process.version);
// console.log(process.platform);
// console.log(process.arch);
// console.log(process.title);

// console.log(process.env);
// NODE_ENV=prod node index

// console.log(__dirname);
// console.log(__filename);

// console.log(process.argv);

const argv = require('yargs').argv;

// console.log(argv);

const { action, id} = argv;

console.log('action ', action,'id ', id);