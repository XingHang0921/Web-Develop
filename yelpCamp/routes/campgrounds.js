const express = require('express')
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const { isLoggedIn, validateCampground, isAuthor} = require('../middleware.js');
const campground = require('../controllers/campground.js')
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.route('/')
    .get(catchAsync(campground.index))
    // .post(validateCampground, catchAsync(campground.createCampground))
    .post(upload.array('image'),(req, res) =>{
        console.log(req.body, req.files)
    })
router.get('/new',isLoggedIn, campground.newPage)

router.route('/:id')
    .get(catchAsync(campground.showPage))
    .put(validateCampground, isLoggedIn, isAuthor, catchAsync(campground.updateCampground))
    .delete(isLoggedIn, isAuthor, catchAsync(campground.deleteCampground))

router.get('/:id/edit', isLoggedIn , isAuthor,catchAsync(campground.editPage))


module.exports = router;