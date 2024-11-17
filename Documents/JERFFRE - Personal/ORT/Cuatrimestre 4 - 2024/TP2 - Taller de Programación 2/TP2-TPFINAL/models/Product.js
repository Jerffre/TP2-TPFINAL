import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";


class Producto extends Model {

}

Producto.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        // unique:true        
      },

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
    },
    
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false, // Relación con el creador (User)
    },
  },
  {
    sequelize: connection,
    modelName: "Producto",
  }
);



export default Producto;