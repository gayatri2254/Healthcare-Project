const { default: mongoose } = require("mongoose");

const ContactSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:Number
    },
    message:{
        type:String
    },
})

const contact=mongoose.model('contact',ContactSchema)
module.exports=contact