const mongoose = require('mongoose')
const Product = require('../schemas/product.schema')
const db=require('../schemas/connect');



const getProducts = async ()=>{
    return await Product.find();
}

const getProductById= (id)=>{
    //TODO: to Implement getProductById
    return 'getProductById'
}


const addProduct =  async (label,color,stock)=>{
    if(!label || !color ){
        return 'label, color are required'
    }else{
        return await Product.create({label,color,stock })
    }
   
}

const updateProduct = (id,product)=>{
    //TODO: to Implement updateProduct
    return 'updateProduct'
}

const deleteProduct = (id)=>{
    //TODO: to Implement deleteProduct
    return 'deleteProduct'
}


module.exports = {
    getProducts,
    getProductById ,
    addProduct ,
    updateProduct,
    deleteProduct

}

