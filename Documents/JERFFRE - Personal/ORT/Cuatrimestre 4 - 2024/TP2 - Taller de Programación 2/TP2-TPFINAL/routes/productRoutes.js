import { Router } from "express";
import ProductController from "../controllers/ProductController.js";
import authorize from "../middlewares/authorize.js";
import { ROLES } from "../config/configRoles.js";

const productRoutes = Router();

const productController = new ProductController()

// Todos los usuarios pueden ver todos los productos (o por id)
productRoutes.get("/", productController.getAllProductController)
productRoutes.get("/:id", productController.getProductByIdController)
productRoutes.post("/",productController.createProductController)
productRoutes.put("/:id",productController.updateProductController)
productRoutes.delete("/:id",productController.deleteProductController)


// Solo "admin" o "editor" pueden crear productos
//productRoutes.post("/", authorize([ROLES.ADMIN, ROLES.EDITOR]), productController.createProductService);


// Solo "admin" o "editor" pueden actualizar productos
//productRoutes.put("/:id", authorize([ROLES.ADMIN, ROLES.EDITOR]), productController.updateProductService);


// Solo "admin" puede eliminar productos
//productRoutes.delete("/:id", authorize([ROLES.ADMIN]), productController.deleteProductService);


export default productRoutes;
