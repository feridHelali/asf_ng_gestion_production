const productService = require('./product.service');



describe('Products Test Suite',()=>{
    it('should return getProducts',()=>{
       //Arrange
     
    let getAllProduct = productService.getProducts

       //Act
       let result = getAllProduct();
       
       
       //ASSERT
       expect(result.length).toEqual(2)

    })
})