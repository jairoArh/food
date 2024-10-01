const mongoose = require('mongoose')

const {Schema} = mongoose

const schemaRestaurant = new Schema({
  id : {
    type : String,
    required : true,
    unique : true
  },
  name : {
    type : String,
    required: true
  },
  city : {
    type : String,
    required: true
  },
  dishes : [
    {
      type : Schema.Types.ObjectId,
      ref: 'dish'
    }
  ]

})

module.exports = mongoose.model('restaurant',schemaRestaurant)