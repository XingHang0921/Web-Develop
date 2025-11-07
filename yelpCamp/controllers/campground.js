const Campground = require('../models/campGround.js')

module.exports.index = async (req,res)=>{
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index', {campgrounds})
}

module.exports.newPage = (req, res) =>{
    res.render('campgrounds/new')
}

module.exports.showPage = async (req,res)=>{
    const campground = await Campground.findById(req.params.id)
    .populate({
        path:'reviews',
        populate:{path:'author'}
    }).populate('author');
    if(!campground){
        req.flash('error', 'Cannot find that campground');
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/show',{campground})
}

module.exports.editPage = async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id);
    if (!campground) {
      req.flash("error", "Cannot find that campground");
      return res.redirect("/campgrounds");
    }
    res.render('campgrounds/edit',{campground})
}