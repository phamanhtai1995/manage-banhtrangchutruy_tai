import express from "express";

const Router = express.Router();

Router.get("/status", (req, res) => {
	res.status(StatusCodes.OK).json({ message: "APIs V2 are ready to use." });
});

export const APIs_V2 = Router;
