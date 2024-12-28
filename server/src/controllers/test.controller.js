import { StatusCodes } from "http-status-codes";
import { TestModel } from "~/models";

const create = async (req, res) => {
	try {
		const payload = req.body;
		await TestModel.create({ ...payload });

		res.status(StatusCodes.OK).json({ message: "create success !" });
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
};

const findAll = async (req, res) => {
	try {
		const responseData = await TestModel.findAll();

		res.status(StatusCodes.OK).json(responseData);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
};

export const TestControllers = {
	create,
	findAll,
};
