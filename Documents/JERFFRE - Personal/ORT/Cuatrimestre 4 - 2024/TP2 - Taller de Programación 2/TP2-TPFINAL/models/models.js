// models.js es el que maneja la relacion entre las tablas

import Role from "./Role.js";
import User from "./User.js";
import Product from "./Product.js";


// Relaciones entre User y Role
User.belongsTo(Role, { foreignKey: "RoleId" }); // Cada usuario tiene un rol
Role.hasMany(User, { foreignKey: "RoleId" });  // Un rol puede tener varios usuarios

// Relaciones entre Product y User
Product.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' }); // Un producto tiene un creador
User.hasMany(Product, { foreignKey: 'createdBy', as: 'products' });  // Un usuario puede crear varios productos


export {Role, User, Product}


