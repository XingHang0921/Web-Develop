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
        min:[0, 'Price must be postive'],
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
    },
    size:{
        type:String,
        enum:['S','M','L'],

    }
})
productSchema.methods.greet = function() {
    console.log('hello hihihihihi')
    console.log(`- from ${this.name}`
    )
}
productSchema.static.fireSale = function(){
    return this.updateMany({}, {onSale:true, price:0})
}
const Product = mongoose.model('Product', productSchema)

const findProduct = async () => {
    const foundProduct = await Product.findOne({name:'Bike Helmet'})
    foundProduct.greet()
}

Product.fireSale()




// const bike = new Product({name: 'Bike Helmet', price:221, size:'S'})
// bike.save()
// Product.findOneAndUpdate({name:'Bike Helmessst'},{price:9000},{new:true})
// .then(data =>{
//     console.log('it work ')
//     console.log(data)
// })
// .catch(err =>{
//     console.log(err)
// })

