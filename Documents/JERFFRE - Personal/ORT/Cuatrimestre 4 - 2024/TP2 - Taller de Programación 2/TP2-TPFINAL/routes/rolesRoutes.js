
import { Router } from "express";
import RoleController from "../controllers/RoleController.js";


const roleRoutes = Router();

const roleController = new RoleController()

roleRoutes.get("/", roleController.getAllRoles)
roleRoutes.post("/", roleController.createRole)


export default roleRoutes;