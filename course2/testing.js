/*
here we are focus on how to read from a file and implementing promise in other to print the data to the console

const fs = require("fs")
const path = require("path")
let p = path.join(__dirname ,"data" , "data.json")


 fs.readFile(p,(err,data) =>{
     //console.log(data)
 })


 fs.writeFile(p,JSON.stringify({name:"paul"}),err=>{
     if(err){
         console.log("an error occured")
     }
     else{
         console.log("written to the file")
     }
 })
 
