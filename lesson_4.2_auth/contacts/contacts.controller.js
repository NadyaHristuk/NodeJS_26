const Contact = require('./contacts.model'); //'./users.model'

class ContactController{
	async getContact(req, res, next) {
		try {
			const contactList = await User.getContacts();
			res.send(userList);
		} catch (err) {
			// res.status(500).json({err: err});
			next(err);
		}
	}
	
	async getContactById(req, res, next) {
		try{
			const { id } = req.params;  // /:id
	
			// const requestedContact = await Contact.find({ _id: id });
			const requestedContact = await Contact.getContact(id);
			(!requestedContact)?res.status(404).send(`Contact with id ${id} does not exist`):res.send(requestedContact);
		
			// if (!requestedContact) {
			// 	const err = new Error(`Contact with id ${id} does not exist`);
			// 	err.status = 404;
			// 	throw err;
			// }		
			
		} catch (err) {
			// res.status(400).json({err: err});
			next(err);
		}
		
	}
	
	async createContact(req, res, next) {
		try{
			const newContact = await Contact.createContact({ ...req.body });
		
			res.status(201).send(newContact);
		} catch (err) {
			next(err);
		}		
	}
	
	async updateContact(req, res, next) {
		try{
			const { id } = req.params;
	
			const userContact = await Contact.updateContact(id, {...req.body})
					
			(!userContact)?res.status(404).send(`Contact with id ${id} does not exist`):res.send(contactUpdate);
		} catch (err) {
			next(err);
		}			
	}
	
	async deleteContact(req, res) {
		try{
			const { id } = req.params;
	
			const contactDel = await Contact.deleteContact( id );
		
			(!contactDel)?res.status(404).send(`Contact with id ${id} does not exist`):res.send(contactDel);
		} catch (err) {
			next(err);
		}		
	}
}

module.exports = {
    contactController: new ContactController(),
}