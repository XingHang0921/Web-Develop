const express = require('express')
const app = express();
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() =>{
        console.log('mongo connect successful')
    })
    .catch (err =>{
        console.log("mongo connection error " + err);
})

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.get('/home', (req, res)=>{
    res.send('home')
})
app.listen(3000, ()=>{
    console.log('app is listen on port 3000'
    )
})