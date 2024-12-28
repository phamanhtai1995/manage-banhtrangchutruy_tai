import { StatusCodes } from "http-status-codes";
import { RoleModel } from "~/models";

const create = async (req, res) => {
	try {
		const { roleName } = req.body;

		await RoleModel.create({ name: roleName, description: roleName });

		res.status(StatusCodes.OK).json({ message: "create role success" });
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
};

export const RoleController = { create };
