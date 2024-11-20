import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";


class Producto extends Model {}

Producto.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    precio: {
      type: DataTypes.DOUBLE,
      allowNull: false,     
    },
    
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    
  },
  { 
    sequelize: connection,
    modelName: "Product",
  }
  
);

export default Producto;