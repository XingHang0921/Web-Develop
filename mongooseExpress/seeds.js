const mongoose = require('mongoose')

const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() =>{
        console.log('mongo connect successful')
    })
    .catch (err =>{
        console.log("mongo connection error " + err);
})

// const p = new Product({
//     name:'Grapefruit',
//     price:1.99,
//     category:'fruit'
// })
// p.save().then(p=>
//     console.log(p)
// )
// .catch(e =>{
//     console.log(e)
// })
const seedProducts = [
  {
    name: "apple",
    price: 1.2,
    qty: 100,
    category: "fruit",
  },
  {
    name: "banana",
    price: 0.8,
    qty: 150,
    category: "fruit",
  },
  {
    name: "broccoli",
    price: 2.5,
    qty: 75,
    category: "vegetable",
  },
  {
    name: "milk",
    price: 3.0,
    qty: 50,
    category: "dairy",
  },
  {
    name: "cheese",
    price: 4.5,
    qty: 30,
    category: "dairy",
  },
  {
    name: "carrot",
    price: 1.1,
    qty: 120,
    category: "vegetable",
  },
]
Product.insertMany(seedProducts).then(res =>
    console.log(res)
).catch(err =>{
    console.log(err)
})