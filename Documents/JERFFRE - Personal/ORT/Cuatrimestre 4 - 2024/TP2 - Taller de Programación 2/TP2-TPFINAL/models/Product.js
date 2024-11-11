import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
//import bcrypt from "bcrypt";

class Producto extends Model {
  /* compare = async (myPlaintextPassword) => {
    const data = await bcrypt.compare(myPlaintextPassword, this.pass);
    return data
  }; */
}

Producto.init(
  {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique:true
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
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    
  },
  {
    sequelize: connection,
    modelName: "Producto",
  }
);

// User.beforeCreate(async (user) => {
//   // console.log(`🚀 ~ User.beforeCreate ~ user:`, user);
//   const salt = await bcrypt.genSalt(10);
//   // console.log(`🚀 ~ User.beforeCreate ~ salt:`, salt);
//   user.salt = salt;
//   const hash = await bcrypt.hash(user.pass, salt);
//   // console.log(`🚀 ~ User.beforeCreate ~ hash:`, hash);
//   user.pass = hash;
// }); 

export default Producto;