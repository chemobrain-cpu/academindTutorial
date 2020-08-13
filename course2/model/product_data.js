//todays goal
/*

the goal for today is to fetch data from a file and also push data to a file
*/
const path = require("path")
const fs = require("fs")
let filepath = path.join(__dirname ,"..","data" , "data.json")
module.exports =  class Store{
    constructor(title){
        this.title = title
    }
    //method to save to the store collection
    static save(item){
        fs.readFile(filepath,(err,data) =>{
            let product
            if(data){
                    //product =  JSON.parse(data)
                   try{product = JSON.parse(data)} 
                   catch(err){
                       console.log(err)
                       product = [ ]
                   }     
                    //writing the new data to files  
            }
                product.push(item)
                
                fs.writeFile(filepath,JSON.stringify(product),err=>{
                    if(err){
                        console.log("an error occured")
                    }else{
                        console.log("done")
                    }
                })             
    })
    }
    static fetch(cb){
        fs.readFile(filepath,(err,data)=>{
            if(err){
                console.log("an arror occured")
            }else{
                cb(JSON.parse(data))
            }

        })
        
    }

    static findByIdAndReplace(item,cb){
        fs.readFile(filepath,(err,data) =>{
            if(data){
               //product =  JSON.parse(data)
               let product = JSON.parse(data)
               console.log(product)
               let dataIndex = product.findIndex(e=>{
                   e.id == item.id
               })
               if(dataIndex){
                   product.splice(dataIndex,1,item)
                   fs.writeFile(filepath,JSON.stringify(product),err=>{
                    if(err){
                        console.log("an error occured")
                    }else{
                        console.log("done")
                    }
                })
                cb()
               }

            
            } 
                     
               //writing the new data to files               
    })


    }
    static findByIdAndDelete(item,cb){
        fs.readFile(filepath,(err,data) =>{
            if(data){
               //product =  JSON.parse(data)
               let product = JSON.parse(data)
               console.log(product)
               let dataIndex = product.findIndex(e=>{
                   e.id == item.id
               })
               if(dataIndex){
                   product.splice(dataIndex,1)
                   fs.writeFile(filepath,JSON.stringify(product),err=>{
                    if(err){
                        console.log("an error occured")
                    }else{
                        console.log("done")
                    }
                })
                cb()
               }

            
            } 
                     
               //writing the new data to files               
    })


    }
}


































/*
starting page
page to view all product listed
page for administrator to create new product
to edit product as an administrator
to delete product
add product to shopping createto go to a checkout page and pay for the product
page for customer to view product
*/


