const mongoose = require('mongoose')

const {Schema} = mongoose
const schemaDish = new Schema({
  id : {
    type: String,
    required :true,
    unique: true
  },
  name :{
    type: String,
    required :true
  },
  vegetarian : {
    type : Boolean,
    default : true
  },
  calories : {
    type : Number,
    required : true
  },
  value : {
    type : Number,
    required: [true,'El valor es requerido'],
    validate: {
      validator: function(v) {
        return /\d+/.test(v);
      },
      message: props => `${props.value} is not a valid!`
    }
  },
  restaurant :{
    type: Schema.Types.ObjectId,
    ref : 'restaurant'
  }
})

module.exports = mongoose.model('dish',schemaDish)