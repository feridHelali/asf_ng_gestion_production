const mongoose = require('mongoose')
const Product = require('../schemas/product.schema')
const db = require('../schemas/connect');




const getProducts = async () => {
    return await Product.find();
}

const getProductById = (id) => {
    const product = Product.findById(id);
    return product;
}


const addProduct = async (label, color, stock) => {
    if (!label || !color) {
        return 'label, color are required'
    } else {
        return await Product.create({ label, color, stock })
    }

}

const updateProduct = async (id, product) => {
    console.log(product)
    console.log(id)
    const result = await Product.findOneAndUpdate({ _id: id},
        {
            label: product.label,
            color: product.color,
            stock: product.stock
        })
    return result;
}

const deleteProduct = async (id) => {
    const result = await Product.findByIdAndDelete(mongoose.Types.ObjectId(id))
    return result;
}


module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct

}

