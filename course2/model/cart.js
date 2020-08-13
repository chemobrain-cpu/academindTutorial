const fs = require("fs")
const path = require("path")

let file_path = path.join(__dirname,"..","data","cart.json")

exports = class Cart{
    static addCart(productId,productPrice){
        //read the cart storage to check if the product is there
        fs.readFile(file_path,(err,data)=>{
            if(!err){
               try{
                data = (JSON.parse(data))
               }catch(err){
                   data =  {products:[],totalPrice:0}
               }
               //checking if the product is in the structure before with the  help of its 
               console.log(data.products)
               let productExist = data.products.findIndex((e)=>{
               return  e.id == productId
            })
            console.log(productExist)

           
            if(productExist !== -1){
                data.products[productExist].no +=1
                data.totalPrice += productPrice
            }else{
                let newProduct = {id:productId,no:1}
                data.products.push(newProduct)
                data.totalPrice += productPrice
            }
            fs.writeFile(file_path,JSON.stringify(data),err=>{
                if(!err){
                    console.log("written sucessfuly")
                }
             })
         
            
         
               
        }
        
        })
    }

    static deleteCart(){

    }
}

