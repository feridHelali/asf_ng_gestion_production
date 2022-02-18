require('dotenv').config()
const express=require('express')
const userRouter = require('./controllers/users.routes');
const productRouter = require('./controllers/product.routes');  
const ordresRouter = require('./controllers/ordre.routes');
const app=express();
const db=require('./schemas/connect');

db.connect()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));




app.use('/users',userRouter)
app.use('/products',productRouter)
app.use('/ordres',ordresRouter)


app.listen(8080,function(){
  console.log('Server listening on http://loalhost:8080')
})
