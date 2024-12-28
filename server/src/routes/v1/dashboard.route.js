import express from "express";
import { DashboardControllers } from "~/controllers/dashboard.controller";

const Router = express.Router();

Router.route("/access").get(DashboardControllers.access);

export const DashboardRoute = Router;
