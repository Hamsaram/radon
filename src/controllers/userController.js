const Bookmodel= require("../models/userModel.js")
 
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await Bookmodel.create(data)
    res.send({msg: savedData})
}
 
const getBooksData= async function (req, res) {
    let allUsers= await Bookmodel.find()
    res.send({msg: allUsers})
}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData

