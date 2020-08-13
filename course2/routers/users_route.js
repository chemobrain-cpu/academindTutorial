const express = require("express")
const Router = express.Router()
const path = require("path")
const store = require("./admin_routes")
const controller_view = require("../controllers/user_controller")


Router.get("/shop",controller_view.shop);
Router.get("/cart",controller_view.cart)
Router.post("/cart",controller_view.postcart)
Router.get("/products/",controller_view.products)
Router.get("/products/:id",controller_view.product)
Router.get("/orders",controller_view.orders)
module.exports.Router = Router