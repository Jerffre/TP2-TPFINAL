import UserService from "../services/userService.js";

class UserController {
  
  userService = new UserService();

  getAllUsersController = async (req, res) => {
    try {
      const data = await this.userService.getAllUsersService();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getUserByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.userService.getUserByIdService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createUserController = async (req, res, next) => {
    try {
      const { name, mail, pass, RoleId } = req.body;
      const data = await this.userService.createUserService({name, mail, pass, RoleId});
      res.status(200).send({ success: true, message: data });
   } catch (error) {
     res.status(400).send({ success: false, message: error.message });
   }
  };

  updateUserController = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, password, roleId } = req.body;      
      const data = await this.userService.updateUserService({
        id, 
        name, 
        password, 
        roleId
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteUserController = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.userService.deleteUserService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

}

export default UserController;

