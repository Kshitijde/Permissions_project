const express = require('express')
const router = new express.Router()
const Request = require('../models/request')
require('../db/mongoose')

// const first = new Request({
//     groupname :"BOIZZ ENJOY" ,
//     eventname :"Timepass"

// })
// first.save().then(()=>{
//     console.log(first)

// }).catch((error) => {
//     console.log('ERROR !' ,error)
// })

// router.get('/approval/:id',(req,res)=>{
//     const id = req.params.id
//     Request.findById(id).then((request)=>{
//         res.send(request)
//         console.log(request)
        
//     })
// })


const request1 = new Request({
    groupname :"BOIZZ ENJOY" ,
    eventname :"Timepass",
})
const request2 = new Request({
    groupname :"ACM" ,
    eventname :"SIG",
})
const request3 = new Request({
    groupname :"DEBSOC" ,
    eventname :"MEET",
})

router.get('/save_requests' ,(req,res)=>{
    var requests = [request1,request2,request3]
    var i ;
    for(i of requests){
        i.save().then(()=>{
            console.log(i)
            res.send(i)
        }).catch((e)=>{
            res.send(e)
        })
     }
    
})


router.get('/requests',(req,res)=>{
    Request.find({}).then((requests)=>{
        res.render('teacher',{
            requests
        })
    }).catch((e)=>{
        console.log(e)
        res.send(e)
    })
})

router.get('/approval/:id' ,async(req,res)=>{
    const _id =req.params.id
    try{
        const request =await Request.findById(_id)
        if(!request){
         
            return res.send("Request not available")
        }
        res.render('approval',{
            groupname : request.groupname ,
            eventname : request.eventname
        })
    }catch(e){
        console.log(e)
        res.send(e)
    }
})



module.exports = router