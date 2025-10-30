const express = require('express')
const router = express.Router({mergeParams:true});
const User = require('../models/user')

const catchAsync = require('../utils/catchAsync')
const ExpressError = require('../utils/ExpressError')

router.get('/register', (req,res)=>{
    res.render('users/register')
})

router.post('/register',async(req,res)=>{
    console.log(req.body)
})

module.exports = router;