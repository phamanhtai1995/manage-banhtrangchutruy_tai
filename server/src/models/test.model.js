import { DataTypes } from "sequelize";
import sequelizeConnectionString from "~/config/database";

export const TestModel = sequelizeConnectionString.define("tests", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});
