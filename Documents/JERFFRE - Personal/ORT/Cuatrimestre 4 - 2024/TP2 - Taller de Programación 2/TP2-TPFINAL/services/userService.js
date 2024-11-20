import { User } from "../models/models.js";

class UserService {

  getAllUsersService = async () => {
    try {
      const users = await User.findAll({
        attributes: ["id","name", "mail", "RoleId", "pass"],
      });
      return users;
    } catch (error) {
      throw error;
    }
  };

  getUserByIdService = async (id) => {
    try {
      const user = await User.findOne({
        where: { id: id },
        attributes: ["name", "mail", "RoleId"],
      });
      return user;
    } catch (error) {
      throw error;
    }
  };
  
  createUserService = async (user) => {
    try {
      if(!user){
        throw new Error("Tenes que ingresar un usuario")
      }
      const newUser = await User.create(user);
      return newUser;
    } catch (error) {
      throw error;
    }
  };

  updateUserService = async (data) => {
    try {
      const { id, name, pass, mail, RoleId} = data;
      const updatedUser = await User.update(
        { name, pass, mail, RoleId },
        { 
          where: { id },
        }
      );
      return updatedUser;
    } catch (error) {
      throw error;
    }
  };

  deleteUserService = async (id) => {
    try {
      const deletedUser = await User.destroy({
        where: { id: id },
      });
      if (deletedUser === 0) {
        throw new Error("User not found");
      }
      return { message: "User soft deleted successfully" };
    } catch (error) {
      throw error;
    }
  };

}

export default UserService;
