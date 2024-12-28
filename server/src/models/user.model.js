import { DataTypes } from "sequelize";
import sequelizeConnectionString from "~/config/database";

export const User = sequelizeConnectionString.define("users", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	author: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	release_date: {
		type: DataTypes.DATEONLY,
	},
	subject: {
		type: DataTypes.INTEGER,
	},
});
