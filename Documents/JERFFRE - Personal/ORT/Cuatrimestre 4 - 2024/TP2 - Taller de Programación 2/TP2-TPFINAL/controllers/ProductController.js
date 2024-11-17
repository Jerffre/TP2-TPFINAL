import ProductService from "../services/productService.js";

class ProductController {

  productService = new ProductService();
  
  createProductService = async (req, res, next) => {
    try {
      const { name, precio, stock } = req.body;
      const newProduct = await this.productService.createUserService({
        name,
        precio,
        stock,
      });
      res.status(200).send({ success: true, message: newProduct });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };



  getAllProductService = async (req, res) => {
    try {
      const products = await this.productService.getAllProductService({ include: { model: User, as: 'creator' } });
      res.status(200).send({ success: true, message: products });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getProductByIdService = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await this.productService.getProductByIdService(id);
      res.status(200).send({ success: true, message: product });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
 
  
  updateProductService = async (req, res) => {
    try {
      const { name, precio, stock} = req.body;
      const { id } = req.params;

      const previousProduct = await Producto.findByPk(id);
      if (!previousProduct) {
        return res.status(404).json({ message: "Producto no encontrado." });
      }

      const updatedProduct = await this.productService.updateUserService({id, name, precio, stock});
      res.status(200).json(updatedProduct);

    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };



  deleteProductService = async (req, res) => {
    try {
      const { id } = req.params;

      const searchedProduct = await Producto.findByPk(id);
      if (!searchedProduct) {
        return res.status(404).json({ message: "Producto no encontrado." });
      }

      const product = await this.productService.deleteProductService(id);
      res.status(200).send({ success: true, message: product });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default ProductController;