const mongoose = require('mongoose');
 
 
const bookSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    category: {
        type:String,
        enum: ["Action" , "Classics" , "Fantasy" , "horror" , "mystery" , "Comic Book"]
    },
    year: Number,
}, { timestamps: true });
 
module.exports = mongoose.model('User', bookSchema)
