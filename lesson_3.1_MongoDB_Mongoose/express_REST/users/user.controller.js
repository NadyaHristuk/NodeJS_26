const User = require('./user.model');



async function getUsers(req, res) {
    const userList = await User.find();
	res.send(userList);
}

async function getUser(req, res) {
	const { id } = req.params;

    // const requestedUser = await User.find({ _id: id });
    const requestedUser = await User.findById(id);

	if (!requestedUser) {
		const err = new Error(`User with id ${id} does not exist`);
		err.status = 404;
		throw err;
	}

	res.send(requestedUser);
}

async function createUser(req, res) {
    const newUser = await User.create({ ...req.body });
    
	res.status(201).send(newUser);
}

async function updateUser(req, res) {
	const { id } = req.params;

	const userUpdate = await User.findOneAndUpdate({_id:id}, {$set: {...req.body}}, { new: true })

	
	res.send(userUpdate);
}

async function deleteUser(req, res) {
	const { id } = req.params;

    const userDel = await User.findOneAndDelete({ _id: id });

	res.send(userDel);
}


module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}