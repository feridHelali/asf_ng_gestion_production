process.env.NODE_ENV='test'
const productService = require('./product.service');
const Product = require('../schemas/product.schema')
const db=require('../schemas/connect')

describe('Products Test Suite',()=>{
    beforeAll(async ()=>{
         await db.connect()
    })
    beforeEach(async ()=>{
      await db.clearDatabase()
    })
    afterEach( async ()=> {
    await Product.deleteMany({})
   })

    afterAll(async ()=>{
       await db.close()
    })
 

    test('should return getProducts',async ()=>{
       //Arrange
       let product =new Product({
          label:'Cable',
          color:'metal',
          stock:5000
       })


     
     await product.save()
     
  

       //Act
       let result =  await productService.getProducts();
       console.log(result)
       
       //ASSERTw
       expect(result.length).toEqual(1)
       expect(result[0].label).toMatch('Cable')
       expect(result[0].color).toMatch('metal')
       expect(result[0].stock).toEqual(5000)
       

    })


    test('should save addProducts',async ()=>{
      //Arrange
      let product =new Product({
         label:'Cable',
         color:'metal',
         stock:5000
      })

      //Act
      let result =  await productService.addProduct(product.label,product.color,product.stock);
      console.log(result)
      
      //ASSERT

      expect(result.label).toMatch('Cable')
      expect(result.color).toMatch('metal')
      expect(result.stock).toEqual(5000)
      

   })

   test('it should fail to addProducts with no label or color property',async ()=>{
      //Arrange
      let product =new Product({
         stock:5000
      })

      //Act
      let result =  await productService.addProduct(product);
      console.log(result)
      
      //ASSERTw

      expect(result).toMatch('label, color are required')
   
   })













})


