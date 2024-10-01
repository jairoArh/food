const Restaurant = require('./../models/Restaurant')

module.exports = {
  'findAll' : async (req,res)=>{
    try{
      const result = await Restaurant.find({})

      return res.status(200).json({state:true,data:result})
    }catch( err ){
      return res.status(500).json({state:"Error",data:null})
    }
  },
  'findById' : async(req,res)=>{
    const {id} = req.params 
    try{
      const result = await Restaurant.findById(id).populate('dishes')
      if( result){
        return res.status(200).json({state:true,data:result})
      }

      return res.status(404).json({state:true,data:null})

      
    }catch( err ){
      return res.status(500).json({state:false,data:err})
    } 
  },
  'save' : async(req,res)=>{
    const restaurant = new Restaurant(req.body)
    try{
      const result = await restaurant.save()

      return res.status(200).json({state:true,data:result})
    }catch(err){
      return res.status(500).json({state:false,data:err})
    }
  },
  'update':async(req,res)=>{
    const {idR} = req.params
    const {id,name,city,starts} = req.body

    try{
      return res.status(200).json({state:"Success",data:{'idR':idR,nameR:name,cityR:city,startsR:starts}})
    }catch(err){
      return res.status(501).json({state:false,data:err})
    }
  }

}