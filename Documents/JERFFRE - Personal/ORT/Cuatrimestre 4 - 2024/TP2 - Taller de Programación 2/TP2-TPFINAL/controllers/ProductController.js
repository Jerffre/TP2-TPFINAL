import ProductService from "../services/productService.js";

class ProductController {

  productService = new ProductService();
  
  getAllProductService = async (req, res) => {
    try {
      const data = await this.productService.getAllProductService();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getProductByIdService = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.productService.getProductByIdService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  createProductService = async (req, res, next) => {
    try {
      const { id, name, precio, stock } = req.body;
      const data = await this.productService.createUserService({
        id,
        name,
        precio,
        stock,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  
  updateProductService = async (req, res) => {
    try {
      const { name, precio, stock} = req.body;
      console.log(`🚀 ~ UserController ~ updateUser= ~ pass:`, pass)
      const { id } = req.params;
      const data = await this.productService.updateUserService({id, name, precio, stock});
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  deleteProductService = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.productService.deleteProductService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default ProductController;