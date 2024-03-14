const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    mobileNo : {
        type : String,
        required : true
    } ,
    userImage : {
        type : String,
        required : true
    },
    designation : {
        type : String,
        required : true
    },
    selectedGender:{
        type : String,
        required : true
    },
    course:{
        type : String,
        required : true
    },
} , { timeseries : true })

const UserModel = mongoose.model('users',Userschema)
module.exports = UserModel