import RoleService from "../services/roleService.js";

class RoleController {
  
  roleService = new RoleService();

  getAllRolesController = async (req, res) => {
    try {
      const data = await this.roleService.getAllRoleService();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getRoleByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const role = await this.roleService.getRoleByIdService(id);
      res.status(200).send({ success: true, message: role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  createRoleController = async (req, res, next) => {    
    try {
      const { name } = req.body;
      const data = await this.roleService.createRoleService({name});
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }; 

  updateRoleController = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const data = await this.roleService.updateRoleService({
        id,
        name,      
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteRoleController = async (req, res) => {
    try {
      const { id } = req.params;    
      const data = await this.roleService.deleteRoleService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
 
}

export default RoleController;

