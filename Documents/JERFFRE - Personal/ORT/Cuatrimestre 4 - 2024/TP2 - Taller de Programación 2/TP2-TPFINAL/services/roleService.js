import { Role } from "../models/models.js";

class RoleService{

    createRoleService = async (role) => {
        try {
          const newRole = await Role.create(role);
          return newRole;
        } catch (error) {
          throw error;
        }
      };
}

export default RoleService;