const mongoose = require('mongoose')

const URI = "mongodb://127.0.0.1:27017/foot"

mongoose.set('strictQuery', false)

mongoose.connect(URI)
  .then(()=>console.log('Connect DB Success'))
  .catch((err)=>console.log('Connect DB Fail ' + err))

module.exports = mongoose