const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() =>{
        console.log('connect successful')
    })
    .catch (err =>{
        console.log("error " + err);
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20,
    },
    price: {
        type:Number,
        require:true,
        min:0,
    },
    categories: [],
    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    }

})

const Product = mongoose.model('Product', productSchema)

const bike = new Product({name: 'Mountain Bike', price:2123
        , categories:['Cycleing', 'safety']})
bike.save()
.then(data =>{
    console.log('it work ' + data)
})
.catch(err =>{
    console.log(err)
})