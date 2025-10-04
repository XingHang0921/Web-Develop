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

const bike = new Product({name: 'Tire Pump', price:21})
bike.save()
Product.findOneAndUpdate({name:'Tire Pump'},{price:-9000},{new:true})
.then(data =>{
    console.log('it work ')
    console.log(data)
})
.catch(err =>{
    console.log(err)
})