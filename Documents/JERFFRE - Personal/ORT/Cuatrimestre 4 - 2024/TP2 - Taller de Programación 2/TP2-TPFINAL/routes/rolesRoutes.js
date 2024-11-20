
import { Router } from "express";
import RoleController from "../controllers/RoleController.js";

const roleRoutes = Router();

const roleController = new RoleController()

roleRoutes.get("/", roleController.getAllRolesController);
roleRoutes.get("/:id", roleController.getRoleByIdController);
roleRoutes.post("/", roleController.createRoleController);
roleRoutes.put("/:id", roleController.updateRoleController);
roleRoutes.delete("/:id", roleController.deleteRoleController);

export default roleRoutes;