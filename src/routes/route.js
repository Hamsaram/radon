const express = require('express');
const router = express.Router();
// const Bookmodel = require("../models/userModel.js")
const BookController = require("../controllers/userController")
 
router.get("/books", function(req,res){
    res.send(" The great Books ")
})
 
 
router.post("/bookSchema", BookController.createBook)
 
router.get("/listbooks", BookController.getBooksData)
 
// router.post("/createUser", UserController.createUser  )
 
// router.get("/getUsersData", UserController.getUsersData)
 
module.exports = router;

 

