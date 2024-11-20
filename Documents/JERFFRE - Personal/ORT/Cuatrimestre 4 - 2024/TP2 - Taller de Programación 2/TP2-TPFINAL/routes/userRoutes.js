import { Router } from "express";
import UserController from "../controllers/UserController.js";


const userRoutes = Router();

const userController = new UserController()

userRoutes.get("/", userController.getAllUsersController)
userRoutes.get("/:id", userController.getUserByIdController)
userRoutes.post("/", userController.createUserController)
userRoutes.put("/:id", userController.updateUserController)
userRoutes.delete("/:id", userController.deleteUserController)

export default userRoutes;
