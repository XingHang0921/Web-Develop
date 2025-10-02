const express = require('express')
const app = express();
[

]
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/')
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


