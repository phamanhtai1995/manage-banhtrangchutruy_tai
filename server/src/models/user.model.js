import { DataTypes } from "sequelize";
import sequelizeConnectionString from "~/config/database";
import bcrypt from "bcrypt";

export const UserModel = sequelizeConnectionString.define(
	"users",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		roleId: {
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: "roles",
				key: "id",
			},
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
	},
	{
		sequelizeConnectionString,
		modelName: "User",
		hooks: {
			beforeCreate: async (user) => {
				const salt = await bcrypt.genSalt(10);
				user.password = await bcrypt.hash(user.password, salt);
			},
		},
	}
);
