const mongoose =require('mongoose')
const {MongoMemoryServer} = require('mongodb-memory-server')

const mongooseOptions={
  useNewUrlParser : true,
  useUnifiedTopology:true
}

const connect = async()=>{
    if (process.env.NODE_ENV==='test'){
      const mongod = await MongoMemoryServer.create()
      const uri =  mongod.getUri()
      mongoose.connect(uri,mongooseOptions);
    }else{
      console.log(process.env.MONGODB_URI)
      mongoose.connect(process.env.MONGODB_URI,mongooseOptions)
    }
}

const close =async ()=>{
  await mongoose.connection.close()
}

const clearDatabase = async ()=>{
  if (process.env.NODE_ENV==='test'){
    await  mongoose.connection.dropDatabase();
  }
}

module.exports = {connect,close,clearDatabase};