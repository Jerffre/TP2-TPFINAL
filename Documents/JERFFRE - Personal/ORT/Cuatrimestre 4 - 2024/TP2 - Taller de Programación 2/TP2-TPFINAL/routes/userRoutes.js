import { Router } from "express";
import UserController from "../controllers/UserController.js";


const userRoutes = Router();

const userController = new UserController()

userRoutes.get("/", userController.getAllUsers)
userRoutes.get("/:id", userController.getUserById)
userRoutes.post("/", userController.createUser)
userRoutes.put("/", userController.updateUser)
userRoutes.delete("/", userController.deleteUser)



export default userRoutes;
