import ProductService from "../services/productService.js";


class ProductController {

  productService = new ProductService();

  //si es que se hace así el configRoles.js y el authorize.js no se usan
  //verifica que el rol sea editor o admin
  createProduct = async (req, res, next) => {
    try {
      const { name, precio, stock, createdBy, nombreRol } = req.body;

      if(nombreRol != "editor" || nombreRol !="admin"){
        return res.status(403).json({
          success: false,
          message: "No tienes permiso para realizar esta acción.",
        });
      }
      const newProduct = await this.productService.createProductService({
        name,
        precio,
        stock,
        createdBy,
    
      });
      res.status(200).send({ success: true, message: newProduct });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };


  //yo comentaría esto y descomentaría lo de abajo
  getAllProduct = async (req, res) => {
    try {
      // Validar que el rol sea "admin", "editor" o "viewer"
      const user = await User.findByPk(req.userId, { include: Role });
      if (!user || !["admin", "editor", "viewer"].includes(user.Role.name)) {
        return res.status(403).json({
          success: false,
          message: "No tienes permiso para realizar esta acción.",
        });
      }
  
      const products = await Product.findAll();
      res.status(200).json({
        success: true,
        data: products,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Error al obtener los productos.",
      });
    }
  };

/*
  getAllProduct = async (req, res) => {
    try {
      const products = await this.productService.getAllProductService({ include: { model: User, as: 'creator' } });
      res.status(200).send({ success: true, message: products });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
*/

//no verifica nada porque cualquiera puede verlo
  getProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await this.productService.getProductByIdService(id);
      res.status(200).send({ success: true, message: product });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
 
  //verifica que el rol sea admin o editor
  updateProduct = async (req, res) => {
    try {
      const { name, precio, stock, createdBy, nombreRol} = req.body;
      const { id } = req.params;

      if(nombreRol != "editor" || nombreRol !="admin"){
        return res.status(403).json({
          success: false,
          message: "No tienes permiso para realizar esta acción.",
        });
      }

      const previousProduct = await Producto.findByPk(id);
      if (!previousProduct) {
        return res.status(404).json({ message: "Producto no encontrado." });
      }

      const updatedProduct = await this.productService.updateProductService({id, name, precio, stock, createdBy});
      res.status(200).json(updatedProduct);

    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };


//verifica que el rol sea admin 
  deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const {nombreRol} = req.body;

      if(nombreRol!="admin"){
        return res.status(403).json({
          success: false,
          message: "No tienes permiso para realizar esta acción.",
        });
      }

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




/*
import ProductService from "../services/productService.js";


class ProductController {

  productService = new ProductService();
  
  createProductService = async (req, res, next) => {
    try {
      const { name, precio, stock } = req.body;
      const newProduct = await this.productService.createProductService({
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
      // Validar que el rol sea "admin", "editor" o "viewer"
      const user = await User.findByPk(req.userId, { include: Role });
      if (!user || !["admin", "editor", "viewer"].includes(user.Role.name)) {
        return res.status(403).json({
          success: false,
          message: "No tienes permiso para realizar esta acción.",
        });
      }
  
      const products = await Product.findAll();
      res.status(200).json({
        success: true,
        data: products,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Error al obtener los productos.",
      });
    }
  };

/*
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

      const updatedProduct = await this.productService.updateProductService({id, name, precio, stock});
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

export default ProductController;  */

