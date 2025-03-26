const { default: mongoose } = require("mongoose");

const ContactSchema=new mongoose.Schema({
    department:{
        type:String
    },
    doctor:{
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    date:{
        type:String
    },
    time:{
        type:String
    },
})

const patient=mongoose.model('patient',ContactSchema)
module.exports=patient