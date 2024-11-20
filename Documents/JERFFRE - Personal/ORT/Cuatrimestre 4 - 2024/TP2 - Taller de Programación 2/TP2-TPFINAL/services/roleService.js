import { Role } from "../models/models.js";

class RoleService {

  getAllRoleService = async () => {
    try {
      const roles = await Role.findAll({
        attributes: ["id", "name"],
      });
      return roles;
    } catch (error) {
      throw error;
    }
  };

  getRoleByIdService = async (id) => {
    try {
        const role = await Role.findOne({
            where: { id }
        })
        return role;
    } catch (error) {
        throw error;
    }
  };

  createRoleService = async (role) => {
    try {  
      if(!role){
        throw new Error("Tenes que ingresar un nombre")
      }
      
      const newRole = await Role.create(role);
      return newRole;
    } catch (error) {
      throw error;
    }
  };

  updateRoleService = async (body) => {
    try {
      const { id, name } = body;
      const updatedRole = await Role.update(
        { name },
        { where: { id } }
      );
      return updatedRole;
    } catch (error) {
      throw error;
    }
  };

  deleteRoleService = async (id) => {
    try {
      const deletedRole = await Role.destroy({
        where: { id: id },
      });
      if (deletedRole === 0) {
        throw new Error("Role not found");
      }
      return { message: "Role soft deleted successfully" };
    } catch (error) {
      throw error;
    }
  };

}

export default RoleService;

