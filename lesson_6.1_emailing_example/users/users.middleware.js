const jwt = require("jsonwebtoken");
const User = require('./users.model');

const authorize = async function (req, res, next) {
    const authHeader = req.headers.authorization;
  const token = authHeader.replace("Bearer ", "");

  let payload;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET); // { id: user._id }
  } catch (err) {
    return res.status(401).send("Authorization failed");
  }

  const user = await User.findById(payload.id);

  req.user = user;

  next();
}

const authorizeWithCookies = async function (req, res, next) {
    // 1. get jwt-token from client request +
    // 2. verify jwt token +
    // 3. fetch corresponding user from DB +
    // 4. pass user object to req. +
    // 5. pass control to next middleware +
  
    const token = req.cookies.token;
  
    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).send("Authorization failed");
    }
  
    const user = await User.findById(payload.id);
  
    req.user = user;
  
    next();
  };

  module.exports ={
    authorizeWithCookies, 
    authorize
  }