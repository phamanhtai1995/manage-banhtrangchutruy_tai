import express from "express";
import { StatusCodes } from "http-status-codes";
import { DashboardRoute } from "./dashboardRoute";
import { UserRoute } from "./userRoute";

const Router = express.Router();

/** Check APIs v1/status */
Router.get("/status", (req, res) => {
	res.status(StatusCodes.OK).json({ message: "APIs V1 are ready to use." });
});

Router.use("/users", UserRoute);
Router.use("/dashboards", DashboardRoute);

export const APIs_V1 = Router;
