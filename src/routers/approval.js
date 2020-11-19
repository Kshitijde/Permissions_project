const express = require('express')
const router = new express.Router()
require('mongoose')
const Request = require('../models/request')


router.get('/approval/:id/app_status/:idd' ,async(req,res)=>{
    let message = ""
    const _idd =req.params.idd
    const _id =req.params.id
    
    if(_idd == 1){
        message = "Permission Accepted !!"
    }
    else if(_idd == -1){
        message = "Permission Rejected !!"
    }
    else{
        message = "Something is wrong !! TRY again "
    }

    try{
        
        const request =await Request.findByIdAndUpdate(_id, {$set: {status : _idd}},
        {new :true ,runValidators : true})

        if(!request){
            return res.status(404).send("ERROR")
        }
        console.log(request)
        await res.render('app_status', {
            code : _idd,
            message : message,
            id :_id
        })
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }


})


module.exports = router