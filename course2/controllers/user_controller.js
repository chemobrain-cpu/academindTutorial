
//importing class data storage from object
const Store = require("../model/product_data")
const Cart = require("../model/cart.js")

module.exports.shop = (req,res)=>{
  //rendering the shop page
  res.render("users/shop")
}

module.exports.cart = (req,res)=>{
  // rendering the cart page
  res.render("users/cart")
}
module.exports.postcart = (req,res)=>{
  console.log(req.body)


  res.render("users/cart")
  
}  


module.exports.products = (req,res)=>{
    //method to fetch all data from our store using a callback
    
      let data = Store.fetch((data)=>{
        res.render('users/products',{data:data}) 
      })

    }
    
  //define and export product-details route 
module.exports.product = (req,res)=>{
  //method to view details of specific items
  
  let data = Store.fetch((data)=>{
    //get specific data
    let specific_data = data.filter(e=>{
      if(e.id == req.params.id){
        return e
      }
    })
    console.log(specific_data)
    
  


    res.render('users/product-details',{data:specific_data}) 
  })

}
  
    
    
module.exports.orders = (req,res)=>{
    //method to fetch all data from our store using a callback
      res.render('users/order')
    
  }










//route to define checkouot

