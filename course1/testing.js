//importing the file system modules to be able to work with files...i.e to create file and write to files or to delete files
const fs = require("fs")
fs.appendFile("textt.txt","hi there,i used es6 syntax to appent this text to this file",()=>{
    console.log("sucesssfully appended")
})
let filecontent = fs.copyFile("./textt.txt")
console.log(filecontent)