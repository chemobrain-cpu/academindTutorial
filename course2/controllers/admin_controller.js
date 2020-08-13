let Store = require("../model/product_data")

  module.exports.getAddProduct = (req,res)=>{
    res.render("admin/add_product.ejs")
  }
  module.exports.getPostProduct = (req,res)=>{
   //call method to add data to our store
   
    Store.save({
       title:req.body.title,
       imageurl:req.body.imageurl,
       price:req.body.price,
       description:req.body.description,
       id:Math.random().toString()
      })
    res.redirect("admin-product")
  
  }
  module.exports.getEditProduct = (req,res)=>{
   Store.fetch((data)=>{
   //get specific data
    let specific_data = data.filter(e=>{
      if(e.id == req.params.id){
        return e
      }
    })  
    res.render('admin/edit_product',{data:specific_data[0]}) 
  })
  }
  module.exports.postEditProduct = (req,res)=>{

  Store.findByIdAndReplace({
    id:req.params.id,
    title:req.body.title,
    imageurl:req.body.imageurl,
    price:req.body.price,
    description:req.body.description,
  },()=>{
    let data = Store.fetch((data)=>{
      res.render("admin/product_list",{data:data,img:"Geolocation-ID-Verification-300x300.png"}) 
    })
  })
  }
  module.exports.postDeleteProduct = (req,res)=>{
    Store.findByIdAndDelete({
      id:req.params.id,
      title:req.body.title,
      imageurl:req.body.imageurl,
      price:req.body.price,
      description:req.body.description,
    },()=>{
      let data = Store.fetch((data)=>{
        res.render("admin/product_list",{data:data,img:"Geolocation-ID-Verification-300x300.png"}) 
      })
    })
    



  }



  module.exports.getAdminProduct = (req,res)=>{
    let data = Store.fetch((data)=>{
      res.render("admin/product_list",{data:data,img:"Geolocation-ID-Verification-300x300.png"}) 
    })
  }

