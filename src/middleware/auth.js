const authenticate = function(req, res, next) {
  //check the token in request header
  //validate this token
  try{
let token = req.headers["x-auth-token"]
if (!token) {res.status(401).send({status: false ,msg: "Token must be present"})}
else{
  next()
}
}
catch(err){
res.status(500).send({status: false , error: err.msg})}
}

module.exports.authenticate = authenticate

