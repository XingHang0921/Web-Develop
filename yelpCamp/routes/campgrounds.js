const express = require('express')
const router = express.Router();
const Campground = require('../models/campGround')
const catchAsync = require('../utils/catchAsync')
const { isLoggedIn, validateCampground, isAuthor} = require('../middleware.js');
const campground = require('../controllers/campground.js')


router.get('/', catchAsync(campground.index))

router.get('/new',isLoggedIn, campground.newPage)

router.post('/', validateCampground, catchAsync(async (req,res)=>{
    const campground = new Campground(req.body.campground)
    campground.author = req.user._id;
    await campground.save()
    req.flash('success', 'Successfully made a new Campground!')
    res.redirect(`campgrounds/${campground._id}`)
}))

router.get('/:id', catchAsync(campground.showPage))

router.get('/:id/edit', isLoggedIn , isAuthor,catchAsync(campground.editPage))

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