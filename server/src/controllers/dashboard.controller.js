import { StatusCodes } from "http-status-codes";

const access = async (req, res) => {
	try {
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
};

export const DashboardControllers = {
	access,
};
