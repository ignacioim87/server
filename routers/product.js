import express from "express";
import { getProducts, deleteProduct, getProduct, saveProduct, updateProduct } from "../controllers/product.js";

const api = express.Router();

//ENDPOINTS QUE EJECUTA EL CONTROLADOR DE PRODUCT

api.post("/add-product", saveProduct);
api.get("/get-products", getProducts);
api.get("/get-product/:id", getProduct);
api.put("/update-product/:id", updateProduct);
api.delete("/delete-product/:id", deleteProduct);

export default api;