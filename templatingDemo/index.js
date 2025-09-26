const express = require('express')
const app = express();
const path = require('path')

app.set('view engine', 'ejs'); //tell app to use ejs
app.set('views', path.join(__dirname, 'views')) 
//help to access the views and run the app outside of this dir

app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/random', (req,res)=>{
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', {rand: num})
})

app.get('/r/:subreddit', (req,res)=>{
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit});
})

app.listen(3000, ()=>{
    console.log('listen on port 3000')
})