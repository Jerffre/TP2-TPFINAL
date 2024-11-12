import RoleService from "../services/roleService.js";

class RoleController {

roleService = new RoleService();


getAllRoles = async (req, res) => {
    try {
      const data = await this.roleService.getAllRoleService();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };


createRole = async (req, res, next) => {
     console.log(`🚀 ~ RoleController ~ createRole= ~ req:`, req.body);
     try {
       const { name } = req.body;
       const data = await this.roleService.createRoleService({name});
       res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
 };  


 
}

export default RoleController;