const jwt = require("jsonwebtoken")
 
const authorize = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    try{
let token = req.headers["x-auth-token"];
let decodedToken=jwt.verify(token ,"functionup-radon")
let modify=req.params.userId;
let loggedUser = decodedToken.userId
if(modify != loggedUser){
    return res.status(403).send({status: false , msg: "modifed user must be logged in"})
}
    next()
}
catch(err){
    res.status(500).send({status: false , error: err.msg})}
  }
 
module.exports.authorize = authorize