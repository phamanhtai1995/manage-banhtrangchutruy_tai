import express from "express";
import { DashboardControllers } from "~/controllers/dashboardController";

const Router = express.Router();

Router.route("/access").get(DashboardControllers.access);

export const DashboardRoute = Router;
