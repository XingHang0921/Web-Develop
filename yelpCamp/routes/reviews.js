const express = require('express')
const router = express.Router({mergeParams:true});
const Review = require('../models/review.js')

const catchAsync = require('../utils/catchAsync')
const { isLoggedIn,validateReview, isReviewAuthor } = require('../middleware.js');
const review = require('../controllers/review.js');

router.post('/', isLoggedIn, validateReview, catchAsync(review.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor,catchAsync(review.deleteReview))


module.exports = router;