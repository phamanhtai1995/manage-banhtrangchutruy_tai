import express from "express";
import { StatusCodes } from "http-status-codes";
import { DashboardRoute } from "./dashboardRoute";
import { UserRoute } from "./userRoute";
import { TestRoute } from "./testRoute";

const Router = express.Router();

/** Check APIs v1/status */
Router.get("/status", (req, res) => {
	res.status(StatusCodes.OK).json({ message: "APIs V1 are ready to use." });
});

Router.use("/users", UserRoute);
Router.use("/dashboards", DashboardRoute);
Router.use("/test", TestRoute);

export const APIs_V1 = Router;
