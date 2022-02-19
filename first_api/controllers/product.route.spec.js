process.env.NODE_ENV='test'
const app = require('../server')
const request = require('supertest')(app)

describe('Product Endpoints Test Suit',()=>{
  test('Ok GET /products',async ()=>{
      let result = await request.get('/products').send()
      console.dir(result.body)
  })

})