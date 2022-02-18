
const express = require('express')
const productService= require('../services/product.service')
const route = express.Router()



route.get('/',async (req, res) => {
    try {
        let result = await productService.getProducts();
        if(result){
            return res.json({
                status:'success',
                message:'All Products',
                payload : result
            })
        }
    } catch (error) {
        return res.json({
            status:'error',
            message:'The system fail to get Products',
            payload : error
        })
    }
})

route.post('/', async (req, res) => {
    let _product = req.body;
    try {
        let result = await productService.addProduct(_product.label,_product.color,_product.stock);
        if(result){
            return res.json({
                status:'success',
                message:'Product added succesfully',
                payload : result
            })
        }
    } catch (error) {
        return res.json({
            status:'error',
            message:'The system fail add the product',
            payload : error
        })
    }
       
})


// TODO: implement getProductById
// TODO: implement update product
// TODO: implement deleteProduct

module.exports = route;