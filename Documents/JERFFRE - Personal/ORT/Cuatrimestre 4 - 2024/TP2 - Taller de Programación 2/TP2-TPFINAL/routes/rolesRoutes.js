
import { Router } from "express";
import RoleController from "../controllers/RoleController.js";


const roleRoutes = Router();

const roleController = new RoleController()

roleRoutes.get("/", roleController.getAllRoles);
roleRoutes.get("/:id", roleController.getRoleById);
roleRoutes.post("/", roleController.createRole);
roleRoutes.delete("/:id", roleController.deleteRole);


export default roleRoutes;