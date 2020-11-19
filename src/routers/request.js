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


// router.get('/requests',(req,res)=>{
//     Request.find({}).then((requests)=>{
//         res.render('teacher',{
//             requests
//         })
//     }).catch((e)=>{
//         console.log(e)
//         res.send(e)
//     })
// })

router.get('/requests/:filter' , async(req,res) =>{
    const filter = req.params.filter
    const requests = await Request.find({})
    if(filter == 'approved'){
        const requests = await Request.find({status : 1})
        res.render('teacher',{
            requests
        })
    }
    if(filter == 'rejected'){
        const requests = await Request.find({status :-1})
        res.render('teacher',{
            requests
        })
    }
    if(filter == 'pending'){
        const requests =await Request.find({status :0})
        res.render('teacher',{
            requests
        })
    }
    res.render('teacher',{
        requests
    })


    
})

router.get('/approval/:id/:status' ,async(req,res)=>{
    const _id =req.params.id
    const status = req.params.status
    let message =""

    try{
        const request =await Request.findById(_id)


        if(status == -1){
            message = "Request is Rejected !"
        }
        if(status == 0){
            message = "Request is not viewed yet !"
        }
        if(status == 1){
            message = "Request is approved !"
        }

        if(!request){
            return res.send("Request not available")
        }

        else{
            res.render('approval',{
                groupname : request.groupname ,
                eventname : request.eventname ,
                message ,//shorthand
                id :request.id,
                status : status,
            })            
        }
        
    }catch(e){
        console.log(e)
        res.send(e)
    }
})



module.exports = router

// var status = {{status}}
// if(status == 1){
//     alert("Permission is approved !!")
//     return 
// }else if(status == -1) {
//     alert("Permission is rejected !!")
//     return
// }else{
//     window.location.href='/approval/{{id}}/app_status/1'
// }