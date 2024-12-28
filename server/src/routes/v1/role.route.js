import express from "express";
import { RoleController } from "~/controllers/role.controller";

const Router = express.Router();

Router.route("/create").post(RoleController.create);

export const RoleRoute = Router;
