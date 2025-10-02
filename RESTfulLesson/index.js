const express = require('express')
const app = express();
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('views', path.join(__dirname,'views'))

const comments = [
    {
        username: 'Todd',
        comment:'so funndy'
    },
    {
        username: 'Tasddd',
        comment:'good ndy'
    },
    {
        username: 'odd',
        comment:'not funndy'
    },
    {
        username: 'aswd',
        comment:'bad nndy'
    },
]
app.get('/comments', (req, res)=>{
    res.render('comments/index.ejs',{comments})
})
app.get('/comments/new',(req,res) =>{
    res.render('comments/new')
})

app.post('/comments', (req, res)=>{
    const {username, comment} = req.body
    comments.push({username, comment})
    res.redirect('/comments');
})
app.get('/tacos', (req, res) =>{
    res.send('get /tacos response')
})

app.post('/tacos', (req,res)=>{
    console.log(req.body)
    res.send(`get post response`)
})
app.listen(3000, ()=>{
    console.log('on port 3000')
})

/*

/comments  base for everything we do
GET /comments list all comments
POST /comments create a new comment
GET /comments/:id Get one comment using ID
PUT/PATCH /comments/:id update one comment using ID
DELETE /comments/:id destroy one comment

One way to make a RESTful route
*/


