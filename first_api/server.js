const express=require('express')
const userRouter = require('./controllers/users.routes');
const productRouter = require('./controllers/product.routes');  
const ordresRouter = require('./controllers/ordre.routes');
const app=express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



 ordres =[]
 users=[{name:'Feriel'},{name:'Asma'},{name:'Sana'}]


app.use('/users',userRouter)
app.use('/products',productRouter)
app.use('/ordres',ordresRouter)


app.listen(8080,function(){
  console.log('Server listening on http://loalhost:8080')
})
