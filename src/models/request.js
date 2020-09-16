const mongoose =require('mongoose')

const requestSchema = mongoose.Schema({

    groupname :{
        type:String ,
        trim :true ,
        required :true 
         
    },
    eventname:{
        type :String ,
        trim :true ,
        required :true 
       
    }
})

const Request = mongoose.model('Request',requestSchema)

module.exports = Request