const express = require('express')
const router = express.Router({mergeParams:true});
const passport = require('passport')
const catchAsync = require('../utils/catchAsync')
const { storeReturnTo } = require('../middleware');
const user = require('../controllers/user');

router.get('/register', user.registerPage)

router.post('/register',catchAsync(user.registerUser))

router.get('/login', (req, res)=>{
    res.render('users/login')
})

router.post('/login', storeReturnTo , passport.authenticate('local',{failureFlash: true, failureRedirect:'/login'}) ,user.login)

router.get('/logout', user.logout); 

module.exports = router;