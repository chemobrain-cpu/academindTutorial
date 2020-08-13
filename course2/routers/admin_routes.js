const express = require("express")
const Router = express.Router()
const controller_product = require("../controllers/admin_controller")



Router.get("/add-product",controller_product.getAddProduct)
Router.post("/add-product",controller_product.getPostProduct)
Router.get("/edit-product/:id",controller_product.getEditProduct)
Router.post("/edit-product/:id",controller_product.postEditProduct)
Router.post("/delete-product/:id",controller_product.postDeleteProduct)
Router.get("/admin-product",controller_product.getAdminProduct)

module.exports.Router = Router
