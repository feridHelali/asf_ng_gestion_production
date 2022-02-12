const mongoose = require('mongoose')
const Product = require('../schemas/product.schema')
const connectDb=require('../schemas/connect');

connectDb()

const getProducts = async ()=>{
    let result = await Product.find({}).exec()
   return result
}

const getProductById= (id)=>{
    return 'getProductById'
}


const addProduct = (product)=>{
    return 'addProduct'
}

const updateProduct = (id,product)=>{
    return 'updateProduct'
}

const deleteProduct = (id)=>{
    return 'deleteProduct'
}

getProducts()

module.exports = {
    getProducts,
    getProductById ,
    addProduct ,
    updateProduct,
    deleteProduct

}

//TODO: to implement getAllProducts