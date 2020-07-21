const bcryptjs = require('bcryptjs');
const User = require('./auth.model');

const getUsers = async(req, res) => {
    const usersList = await User.find();
    res.send(usersList);
}

const createUser = async(req, res) => {
   try {const {password, email} =  req.body;

    const candidate = await User.findOne({email});

    if (candidate) {
        res.status(400).send('this email is in use');
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({email, password: hashPassword});

    const userInDb = await newUser.save();

    res.status(201).send(userInDb);}
    catch (err) {
        res.status(500).send('something wrong in db' + err);
    }
;}

const loginUser = async(req, res) => {
    try{
        const {password, email} =  req.body;

        const user = await User.findOne({email});
        console.log(user.password)
        
      
        if(!user){
            res.status(400).send(`no User with email ${email}`)
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        
        if(!isMatch) {
            res.status(400).send('your pass is wrong');
        }

        res.send('You are loged')

    }catch (err){
        res.status(500).send('something wrong - ' + err);
    }
}

module.exports = {
    createUser,
    loginUser,
    getUsers
}
