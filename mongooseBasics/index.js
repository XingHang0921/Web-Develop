const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() =>{
        console.log('connect successful')
    })
    .catch (err =>{
        console.log("error " + err);
})

const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:Number,
});

const Movie = mongoose.model('Movie', movieSchema);
const amadeus = new Movie({title:'Amadeus', year:1986, score:9.2, rating:5})

Movie.insertMany([
    {
        title: "The Matrix",
        year: 1999,
        score: 9.0,
        rating: 5
    },
    {
        title: "Inception",
        year: 2010,
        score: 8.8,
        rating: 4
    },
    {
        title: "Interstellar",
        year: 2014,
        score: 8.6,
        rating: 5
    },
    {
        title: "The Dark Knight",
        year: 2008,
        score: 9.1,
        rating: 5
    },
    {
        title: "Parasite",
        year: 2019,
        score: 8.6,
        rating: 4
    }
])
    .then(data =>{
        console.log('it worked')
        console.log(data);
    })