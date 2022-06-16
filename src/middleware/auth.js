const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
let token = req.headers["x-auth-token"]
if (!token) {res.send({status: false ,msg: "Token must be present"})}
else{
    next()
  }
}
 
module.exports.authenticate = authenticate
