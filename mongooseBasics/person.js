const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() =>{
        console.log('connect successful')
    })
    .catch (err =>{
        console.log("error " + err);
})

const personSchema = new mongoose.Schema({
    first: String,
    last:String,
})

personSchema.virtual('fullName').get(function(){
    return`${this.first} ${this.last}`
})

personSchema.pre('save', async function(){
    this.first = 'yo'
    this.last = 'ma'
    console.log('About to Save')
})

personSchema.post('save', async function(){
    console.log('Just Save')
})
const Person = mongoose.model('Person', personSchema);