import { Router } from "express";
import UserController from "../controllers/UserController.js";


const userRoutes = Router();

const userController = new UserController()
// userRoutes.get("/", (req, res) =>(
//     res.send("res desde userRoutes")
// ))

userRoutes.get("/", userController.getAllUsers)


export default userRoutes;
