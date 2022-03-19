
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
route.get('/:id',async (req, res) => {
    let id=req.params.id;
    try {
        let result = await productService.getProductById(id);
        if(result){
            return res.json({
                status:'success',
                message:'A Product',
                payload : result
            })
        }
    } catch (error) {
        return res.json({
            status:'error',
            message:'The system fail to get the Product',
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


route.put('/:id', async (req, res) => {
    let _product = req.body;
    try {
        let result = await productService.updateProduct(req.params.id,_product);
        if(result){
            return res.json({
                status:'success',
                message:'Product Updated succesfully',
                payload : result
            })
        }
    } catch (error) {
        return res.json({
            status:'error',
            message:'The system fail update the product',
            payload : error
        })
    }
       
})


route.delete('/:id', async (req, res) => {
  
    try {
        let result = await productService.deleteProduct(req.params.id);
        if(result){
            return res.json({
                status:'success',
                message:'Product Removed succesfully',
                payload : result
            })
        }
    } catch (error) {
        return res.json({
            status:'error',
            message:'The system fail remove the product',
            payload : error
        })
    }
       
})



module.exports = route;