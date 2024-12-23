import { StatusCodes } from "http-status-codes";
import { MOCK_DATABASE } from "~/mock/database";

const login = async (req, res) => {
	try {
		console.log(">>>>>", req.body);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
};

const logout = async (req, res) => {
	try {
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
};

const refreshToken = async (req, res) => {
	try {
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
};

export const userControllers = {
	login,
	logout,
	refreshToken,
};
