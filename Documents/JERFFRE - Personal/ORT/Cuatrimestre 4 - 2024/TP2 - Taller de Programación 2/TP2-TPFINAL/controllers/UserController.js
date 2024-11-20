import UserService from "../services/userService.js";

class UserController {

userService = new UserService();

 createUser = async (req, res, next) => {
     console.log(`🚀 ~ UserController ~ createUser= ~ req:`, req.body);
     try {
       const { name, mail, pass, RoleId } = req.body;
       const data = await this.userService.createUserService({name, mail, pass, RoleId});
       res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
 };
 
getAllUsers = async (req, res) => {
    try {
      const data = await this.userService.getAllUsersService();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.userService.getUserByIdService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
};



updateUser = async (req, res) => {
    try {
      const { name, password, roleId } = req.body;
      const { id } = req.params;
      const data = await this.userService.updateUserService(id, name, password, RoleId);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
};

deleteUser = async (req, res) => {
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

  /*
  import UserService from "../services/userService.js";

class UserController {

userService = new UserService();

 createUser = async (req, res, next) => {
     console.log(`🚀 ~ UserController ~ createUser= ~ req:`, req.body);
     try {
       const { name, mail, pass } = req.body;
       const data = await this.userService.createUserService({name, mail, pass});
       res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
 };
 
getAllUsers = async (req, res) => {
    try {
      const data = await this.userService.getAllUsersService();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.userService.getUserByIdService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
};



updateUser = async (req, res) => {
    try {
      const { name, passwors } = req.body;
      const { id } = req.params;
      const data = await this.userService.updateUserService(id, name, passwors);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
};

deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.userService.deleteUserService(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
};

}

  export default UserController; */