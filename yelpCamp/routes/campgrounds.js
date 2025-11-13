const express = require('express')
const router = express.Router();
const Campground = require('../models/campGround')
const catchAsync = require('../utils/catchAsync')
const { isLoggedIn, validateCampground, isAuthor} = require('../middleware.js');
const campground = require('../controllers/campground.js')


router.get('/', catchAsync(campground.index))

router.get('/new',isLoggedIn, campground.newPage)

router.post('/', validateCampground, catchAsync(campground.createCampground))

router.get('/:id', catchAsync(campground.showPage))

router.get('/:id/edit', isLoggedIn , isAuthor,catchAsync(campground.editPage))

router.put('/:id', validateCampground, isLoggedIn, isAuthor, catchAsync(campground.updateCampground))

router.delete('/:id', isLoggedIn, isAuthor, catchAsync(campground.deleteCampground))

module.exports = router;