const jwt = require("jsonwebtoken")
 
const authorize = function(req, res, next) {
    // comapre the logged in user's id and the id in request
let token = req.headers["x-auth-token"];
let decodedToken=jwt.verify(token ,"functionup-radon")
let modify=req.params.userId;
let loggedUser = decodedToken.userId
if(modify != loggedUser){
    return res.send({status: false , msg: "modified user must be logged"})
}
    next()
}
 
module.exports.authorize = authorize
