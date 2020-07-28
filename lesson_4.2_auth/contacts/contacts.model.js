const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Types;


// username - string
// email - string
// password - string
const contactShema = new Schema({
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

const getContacts = function () {
    return this.find();
}

const getContact = async function (id) {
    return await this.findById(id);
}

const createContact = async function (contact) {
    return await this.create(contact);
}

const updateContact =  function (id, newfilds) {
	return this.findOneAndUpdate({_id:id}, {$set: newfilds}, { new: true })
}

const deleteContact = async function (id) {
    return await this.findOneAndDelete({ _id: id });
}

contactShema.statics.getContacts=getContacts;
contactShema.statics.getContact=getContact;
contactShema.statics.createContact=createContact;
contactShema.statics.updateContact=updateContact;
contactShema.statics.deleteContact=deleteContact;

// collection name -> users
const contactModel = mongoose.model('Contact', contactShema); 

module.exports = contactModel;