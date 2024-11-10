import { Router } from "express";
import ProductController from "../controllers/ProductController.js";


const productRoutes = Router();

const ProductController = new ProductController()

productRoutes.get("/", productController.getAllProductService)
productRoutes.get("/:id", productController.getProductByIdService)
productRoutes.post("/", productController.createProductService)
productRoutes.put("/", productController.updateProductService)
productRoutes.delete("/", productController.deleteProductService)



export default productRoutes;
