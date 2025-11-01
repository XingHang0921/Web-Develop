const express = require('express')
const router = express.Router();
const Campground = require('../models/campGround')
const catchAsync = require('../utils/catchAsync')
const { isLoggedIn, validateCampground, isAuthor} = require('../middleware.js');



router.get('/', catchAsync(async (req,res)=>{
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index', {campgrounds})
}))

router.get('/new',isLoggedIn, (req, res) =>{
    res.render('campgrounds/new')
})

router.post('/', validateCampground, catchAsync(async (req,res)=>{
    const campground = new Campground(req.body.campground)
    campground.author = req.user._id;
    await campground.save()
    req.flash('success', 'Successfully made a new Campground!')
    res.redirect(`campgrounds/${campground._id}`)
}))

router.get('/:id', catchAsync(async (req,res)=>{
    const campground = await Campground.findById(req.params.id).populate('reviews').populate('author');
    console.log(campground)
    if(!campground){
        req.flash('error', 'Cannot find that campground');
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/show',{campground})
}))

router.get('/:id/edit', isLoggedIn , isAuthor,catchAsync(async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id);
    if (!campground) {
      req.flash("error", "Cannot find that campground");
      return res.redirect("/campgrounds");
    }
    res.render('campgrounds/edit',{campground})
}))

router.put('/:id', validateCampground, isLoggedIn, isAuthor, catchAsync(async (req, res) => {
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id,{...req.body.campground})
    req.flash('success', 'Successfully updated the Campground')
    res.redirect(`/campgrounds/${campground._id}`)
}))

router.delete('/:id', isLoggedIn, isAuthor, catchAsync(async(req, res)=>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash("success", "Sucessfully delete a Campground");
    res.redirect('/campgrounds')
}))

module.exports = router;