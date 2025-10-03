const express = require('express')
const app = express();
const path = require('path')
const {v4 : uuid} = require('uuid')
const methodOverride = require('method-override')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

let comments = [
    {
        id:uuid(),
        username: 'Todd',
        comment:'so funndy'
    },
    {
        id:uuid(),
        username: 'Tasddd',
        comment:'good ndy'
    },
    {
        id:uuid(),
        username: 'odd',
        comment:'not funndy'
    },
    {
        id:uuid(),
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

app.get('/comments/:id', (req, res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/show',{comment})
})

app.get('/comments/:id/edit', (req, res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', {comment})
})
app.post('/comments', (req, res)=>{
    const {username, comment} = req.body
    comments.push({username, comment, id:uuid()})
    res.redirect('/comments');
})

app.patch('/comments/:id', (req, res)=>{
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

app.delete('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const foundComment = comments.find(c => c.id === id)
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments')
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


