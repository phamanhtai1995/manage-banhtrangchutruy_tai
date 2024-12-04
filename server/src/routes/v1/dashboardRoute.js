import express from "express";

const Router = express.Router();

Router.route("/access").get((req, res) => {});

export const DashboardRoute = Router;
