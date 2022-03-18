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

const updateProduct = async (id,product)=>{
    const result = await Product.findByIdAndUpdate({_id:mongoose.Types.ObjectId(id),update:product})
    return result;
}

const deleteProduct = async (id)=>{
    const result = await Product.findByIdAndDelete(mongoose.Types.ObjectId(id))
    return result;
}


module.exports = {
    getProducts,
    getProductById ,
    addProduct ,
    updateProduct,
    deleteProduct

}

