const mongoose = require('mongoose')
const validator = require('validator')


const movieD = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 50
    },
    img: {
        type: String,
        required: true,
        minlength: 50
    },
    summary: {
        type: String,
        required: true,
        minlength: 5000
    }

})


const movie = new mongoose.model('Movie', movieD)

module.exports = movie