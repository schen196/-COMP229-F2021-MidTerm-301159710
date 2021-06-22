// File Name: COMP229 Midterm
// Student Name: Steven Chen
// Student Number: 301159710
let mongoose = require('mongoose');

// create a model class

let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
    {
        collection: "books"
    });

module.exports = mongoose.model('Book', bookModel);