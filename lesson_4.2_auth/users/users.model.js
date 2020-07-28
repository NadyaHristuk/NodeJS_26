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
        trim: true, // ' nadya '
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    token: {
        type: String,
        trim: true,
      }
});


// collection name -> users
const userModel = mongoose.model('Auth', userShema); 

module.exports = userModel;