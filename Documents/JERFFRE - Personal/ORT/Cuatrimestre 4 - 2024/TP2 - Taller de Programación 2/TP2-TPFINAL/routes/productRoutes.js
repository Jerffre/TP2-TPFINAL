import { Router } from "express";
import ProductController from "../controllers/ProductController.js";
import authorize from "../middlewares/authorize.js";


const productRoutes = Router();

const ProductController = new ProductController()

// Todos los usuarios pueden ver todos los productos (o por id)
productRoutes.get("/", productController.getAllProductService)
productRoutes.get("/:id", productController.getProductByIdService)

// Solo "admin" o "editor" pueden crear productos
productRoutes.post("/", authorize(["admin", "editor"]), productController.createProductService);


// Solo "admin" o "editor" pueden actualizar productos
productRoutes.put("/:id", authorize(["admin", "editor"]), productController.updateProductService);


// Solo "admin" puede eliminar productos
productRoutes.delete("/:id", authorize(["admin"]), productController.deleteProductService);




export default productRoutes;
