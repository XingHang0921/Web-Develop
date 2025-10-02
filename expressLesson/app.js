const express = require('express')
const app = express();

// app.use((req,res) =>{
//     console.log('we got a new user')
//     res.send('<h1>hello we got your request</h1>')
// })
app.get('/', (req,res) =>{
    res.send('home')
})
app.get('/r/:subreddit', (req,res) =>{
    const {subreddit} = req.params
    res.send(`<h1> ${subreddit} is a sub reddit`)
})
app.get('/cats', (req,res) =>{
    res.send('meow')
})

app.listen(3000, ()=>{
    console.log('listening to port 3000')
})