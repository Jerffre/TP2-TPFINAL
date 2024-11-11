import UserService from "../services/userService.js";

class UserController {

userService = new UserService();


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


createUser = async (req, res, next) => {
  console.log(`🚀 ~ UserController ~ createUser= ~ req:`, req.body);
  try {
    const { name, pass, mail } = req.body;

    // Validar que password no esté vacío o nulo
    if (!password) {
      throw new Error("Password is required.");
    }

    // Cambiar `password` a `pass` para coincidir con el modelo
    const data = await this.userService.createUserService({ name, pass, mail });
    res.status(200).send({ success: true, message: data });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};



// createUser = async (req, res, next) => {
//     console.log(`🚀 ~ UserController ~ createUser= ~ req:`, req.body);
//     try {
//       const { name, password, mail } = req.body;
//       const data = await this.userService.createUserService({name, password, mail});
//       res.status(200).send({ success: true, message: data });
//     } catch (error) {
//       res.status(400).send({ success: false, message: error.message });
//     }
// };

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

  export default UserController;