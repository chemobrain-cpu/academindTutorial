const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
//const cors = require("cors")

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.set("view engine","ejs")
//app.use(cors)

//importing the routes from the routes
 const admin_routes = require("./routers/admin_routes.js")
 const users_routes = require("./routers/users_route.js")

app.use(admin_routes.Router)
app.use(users_routes.Router)



//returning a 404 page
app.use((req,res,next)=>{
  res.render("404.ejs")
})


app.listen(4000,()=>{
    console.log("app started")
})