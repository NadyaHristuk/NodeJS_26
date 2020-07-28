const { Router } = require('express');
const contactRouter = Router();
const {
	validateCreateContact,
	validateUpdateContact,
	validateObjectId
} = require('../helpers/validateContacts');

const {contactController} = require('./contacts.controller'); //'./contact.controller'


// R - Read
contactRouter.get('/', contactController.getContact);
contactRouter.get('/:id', validateObjectId, contactController.getContactById);
// C - Create
contactRouter.post('/', validateCreateContact, contactController.createContact);
// U - Update
contactRouter.put('/:id', validateObjectId, validateUpdateContact, contactController.updateContact);
// D - Delete
contactRouter.delete('/:id', validateObjectId, contactController.deleteContact);


module.exports = contactRouter;


