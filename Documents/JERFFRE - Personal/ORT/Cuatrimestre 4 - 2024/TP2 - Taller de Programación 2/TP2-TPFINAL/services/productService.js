import { Product } from "../models/models.js";

class ProductService {

  getAllProductService = async () => {
    try {
      const products = await Product.findAll({
        attributes: ["id", "name"],
      });     

      return products;
    } catch (error) {
      throw error;
    }
  };

  getProductByIdService = async (id) => {
    try {
      const product = await Product.findOne({
        where: { id },
        attributes: ["id", "name"],
      });

      if (!product) {
        throw new Error("Product not found or access restricted.");
      }
      return product;
    } catch (error) {
      throw error;
    }
  };  
  
  createProductService = async (product) => {
    try {
      const newProduct = await Product.create(product);
      return newProduct;
    } catch (error) {
      throw error;
    }
  };

  updateProductService = async (data) => {
    try {
      const { id, name, precio, stock} = data;
      const products = await Product.update(
        { id, name, precio, stock},
        {
          where: { id },
        }
      );
      return products;
    } catch (error) {
      throw error;
    }
  };

  deleteProductService = async (id) => {
    try {
        const product = await Product.destroy (
          { active: false },
          {
            where: { id },
          }
        );
        return product;
      } catch (error) {
        throw error;
      }
  };
  
}

export default ProductService;

/*
import { Product } from "../models/models.js";

class ProductService {

  getAllProductService = async () => {
    try {
      const products = await Product.findAll({
        attributes: ["id", "name"],
      });
      if(ROLES.ADMIN)
      return products;
    } catch (error) {
      throw error;
    }
  };




  getProductByIdService = async (id) => {
    try {
      const products = await Product.findAll({
        where: { id },
        attributes: ["id", "name"],
      });
      return products;
    } catch (error) {
      throw error;
    }
  };

  
  // Agregar validación de tipo Usuario: solo Admin puede agregar productos
  createProductService = async (product) => {
    try {
      const newProduct = await Product.create(product);
      return newProduct;
    } catch (error) {
      throw error;
    }
  };
  updateProductService = async (data) => {
    try {
      const { id, name, precio, stock } = data;
      const products = await Product.update(
        { id, name, precio, stock },
        {
          where: { id },
        }
      );
      return products;
    } catch (error) {
      throw error;
    }
  };

  deleteProductService = async (id) => {
    return `deleteProductService ${id}`;
  };
}

export default ProductService; */
