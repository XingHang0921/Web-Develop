const express = require('express')
const morgan = require('morgan')
const app = express();

app.use(morgan('tiny'))

app.get('/', (req, res)=>{
    console.log('get hit')
    res.send('home')
})

app.get('/dogs', (req, res)=>{
    console.log('dog get hit')

    res.send('woof woof')
})

app.listen(4000, ()=>{
    console.log('listening on 4000')
})

