const bcryptjs = require('bcryptjs');
const User = require('./users.model');
const jwt = require("jsonwebtoken");

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

    res.status(201).send(
       { id: userInDb._id,
        username,
        email});}
    catch (err) {
        res.status(500).send('something wrong in db' + err);
    }
;}

const loginUser = async(req, res) => {
    try{
        const {password, email} =  req.body;

        const user = await User.findOne({email});
        // console.log(user.password)
        
      
        if(!user){
            res.status(400).send(`no User with email ${email}`)
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        
        if(!isMatch) {
            res.status(401).send('your pass is wrong');
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
          });

          await User.findByIdAndUpdate({email}, {$set: token}, { new: true })


        //   // "Bearer " Authorization
        //   res.json({ token });


          //cookie
          res.cookie("token", token, { httpOnly: true });
            res.status(200).send({ token });

    }catch (err){
        res.status(500).send('something wrong - ' + err);
    }
}

const getCurrentUser = (req, res) => {
    return res.status(200).send(req.user);
  }

  const logOut = async(req, res) => {
      const {email} = req.body;
      const user = await User.findOneAndUpdate({email}, {$set: {token: null}}, { new: true });
      res.send('you are logout');
  }

module.exports = {
    createUser,
    loginUser,
    getCurrentUser,
    logOut,
    getUsers
}
