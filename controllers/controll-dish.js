const Dish = require('./../models/Dish')
const Restaurant = require('./../models/Restaurant')

module.exports = {
  findAll : async(req,res)=>{
    return res.status(200).json({state:true,data:'naaa'})
  },
  save : async(req,res)=>{
    const dish = new Dish(req.body)
    const {id} = req.params
    try{

      const restaurant = await Restaurant.findById(id)
      if( restaurant ){
        restaurant.dishes.push( dish )
        await restaurant.save()
        dish.restaurant = restaurant

        const result = await dish.save()

        return res.status(201).json({state:true,data:dish})
      }else{
        return res.status(404).json({state:true,data:null})
      }

      
    }catch(err){
      return res.status(500).json({state:false,errr:err})
    }
  }
}