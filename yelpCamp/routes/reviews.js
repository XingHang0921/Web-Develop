const express = require('express')
const router = express.Router({mergeParams:true});
const Campground = require('../models/campGround')
const Review = require('../models/review.js')

const catchAsync = require('../utils/catchAsync')
const { isLoggedIn,validateReview } = require('../middleware.js');

router.post('/', validateReview, isLoggedIn, catchAsync(async (req, res) =>{
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review)
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success','Sucessfully created new Review')
    res.redirect(`/campgrounds/${campground._id}`)
}))

router.delete('/:reviewId', isLoggedIn,catchAsync(async (req, res) =>{
    const {id, reviewId} = req.params;
    await Campground.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Sucessfully deleted a Review");
    res.redirect(`/campgrounds/${id}`)

}))


module.exports = router;