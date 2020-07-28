const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Types;


// username - string
// email - string
// password - string
const userShema = new Schema({
    email: {
        type: String,
        required: true,
        validate: (value) => value.includes('@'),
    },
    password: {
        type: String,
        required: true
    },
    token: String
});


// collection name -> users
const userModel = mongoose.model('Auth', userShema); 

module.exports = userModel;