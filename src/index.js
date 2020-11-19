const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

//setup path for config
const publicDirectorypath = path.join(__dirname , '../public')
const viewspath = path.join(__dirname ,'../templates/views')
const partialspath = path.join(__dirname ,'../templates/partials')

//setup css,html,jsclient side
app.use(express.static(publicDirectorypath))
app.use(express.json())

//setup handlebars and views
app.set('view engine','hbs')
app.set('views' ,viewspath)
hbs.registerPartials(partialspath)

const approvalRouter = require('../src/routers/approval')
const requestRouter = require('../src/routers/request')

app.use(approvalRouter)
app.use(requestRouter)

app.get('/',(req,res)=>{

    res.render('index')
})

app.listen(port ,()=>{

    console.log(`Server is up on port ${port} !!`)
})


//C:/Users/akash/mongodb/bin/mongod --dbpath=/Users/akash/mongodb-data