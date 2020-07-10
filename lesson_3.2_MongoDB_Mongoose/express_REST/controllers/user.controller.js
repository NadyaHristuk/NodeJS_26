const User = require('../models/users.model'); //'./users.model'

class UserController{
	async getUsers(req, res, next) {
		try {
			const userList = await User.getUsers();
			res.send(userList);
		} catch (err) {
			// res.status(500).json({err: err});
			next(err);
		}
	}
	
	async getUser(req, res, next) {
		try{
			const { id } = req.params;  // /:id
	
			// const requestedUser = await User.find({ _id: id });
			const requestedUser = await User.getUser(id);
			(!requestedUser)?res.status(404).send(`User with id ${id} does not exist`):res.send(requestedUser);
		
			// if (!requestedUser) {
			// 	const err = new Error(`User with id ${id} does not exist`);
			// 	err.status = 404;
			// 	throw err;
			// }		
			
		} catch (err) {
			// res.status(400).json({err: err});
			next(err);
		}
		
	}
	
	async createUser(req, res, next) {
		try{
			const newUser = await User.createUser({ ...req.body });
		
			res.status(201).send(newUser);
		} catch (err) {
			next(err);
		}		
	}
	
	async updateUser(req, res, next) {
		try{
			const { id } = req.params;
	
			const userUpdate = await User.updateUser(id, {...req.body})
					
			(!userUpdate)?res.status(404).send(`User with id ${id} does not exist`):res.send(userUpdate);
		} catch (err) {
			next(err);
		}			
	}
	
	async deleteUser(req, res) {
		try{
			const { id } = req.params;
	
			const userDel = await User.deleteUser( id );
		
			(!userDel)?res.status(404).send(`User with id ${id} does not exist`):res.send(userDel);
		} catch (err) {
			next(err);
		}		
	}
}

module.exports = {
    userController: new UserController(),
}