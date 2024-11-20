
import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Role extends Model {};

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true // Roles como "admin", "editor", "viewer"
    },

  },
  {
    sequelize: connection,
    modelName: "Role",
  }
  
);

export default Role;
