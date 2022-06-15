const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
 
const mid1 =async  function(req, res, next) {
 
    const token = req.headers["x-auth-token"];
    if (!token) token= req.headers["x-auth-token"];
 
 
    if(!token) return res.send({ status: false, msg: "token must be present"});
    console.log(token);
    const decodedToken = jwt.verify(token, 'functionup-radon');
    console.log(decodedToken)
    if (!decodedToken) return res.send({ status: false, msg: "token is invalid"});
      next()  
}
 
module.exports.mid1 = mid1;

