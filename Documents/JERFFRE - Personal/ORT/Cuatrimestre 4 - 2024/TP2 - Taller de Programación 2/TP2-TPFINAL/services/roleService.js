import { Role } from "../models/models.js";

class RoleService{

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

      getRoleById = async (id) => {
        try {
            const role = await Role.findOne({
                where: { id }
            })
            return role;
        } catch (error) {
            throw error;
        }
    };



  deleteRole = async (id) => {
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

