import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";


class User extends Model {

  compare = async (myPlaintextPassword) => {
    const data = await bcrypt.compare(myPlaintextPassword, this.pass);
    return data
  };
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: { //revisar esto bien
      type: DataTypes.INTEGER,
      allowNull: false,
    },    
    salt: {
      type: DataTypes.STRING,
    },
  },

  {
    sequelize: connection,
    modelName: "User", //Este va a ser el nombre de la tabla (en sql server)
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.salt = salt;
  const hash = await bcrypt.hash(user.pass, salt);
  user.pass = hash;
});

export default User;