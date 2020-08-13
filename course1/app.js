//importing http modules to create a server
const http  =  require("http")
//importing the file system modules to be able to work with files...i.e to create file and write to files or to delete files
const fs = require("fs")

const router = require("./router")
const express = require("express")


//the method of http module used to create server

//req: helps us to acess data about the incoming request
//res:helps us to send data back to the client
//res,req are object with a couple of properties and method

//the create server method returns a server object
//our server can also make a request to other server by using the get method instead

//the argument of the createServer method accept a callback as an argument.....the argument/callback function will be executed for every incoming request
const server = http.createServer(router)
console.log("hi")
//server object has a couple of properties and methods
//but to run our code when request is made to our server we use the listen()  methpod of the server object,this method is an event listener
server.listen(3000,()=>{
    console.log("app started")
})