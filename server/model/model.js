const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    cno : {
        type : String,
        required: true
    },
    course : {
        type : String,
        required: true
    },
    professor : {
        type: String,
        required: true,
        unique: true
    },
    grade : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;