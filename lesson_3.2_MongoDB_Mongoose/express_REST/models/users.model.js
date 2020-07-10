const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Types;


// username - string
// email - string
// password - string
const userShema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: (value) => value.includes('@'),
    },
    password: {
        type: String,
        required: true
    }
});

const getUsers = function () {
    return this.find();
}

const getUser = async function (id) {
    return await this.findById(id);
}

const createUser = async function (user) {
    return await this.create(user);
}

const updateUser =  function (id, newfilds) {
	return this.findOneAndUpdate({_id:id}, {$set: newfilds}, { new: true })
}

const deleteUser = async function (id) {
    return await this.findOneAndDelete({ _id: id });
}

userShema.statics.getUsers=getUsers;
userShema.statics.getUser=getUser;
userShema.statics.createUser=createUser;
userShema.statics.updateUser=updateUser;
userShema.statics.deleteUser=deleteUser;

// collection name -> users
const userModel = mongoose.model('User', userShema); 

module.exports = userModel;