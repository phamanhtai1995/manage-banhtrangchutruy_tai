import { Sequelize } from "sequelize";
import { env } from "./enviroment.js";

const { DB_NAME, DB_USER, DB_HOST, DB_PASSWORD } = env;

const sequelizeConnectionString = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	host: DB_HOST,
	dialect:
		"postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
	logging: false,
});

sequelizeConnectionString
	.authenticate()
	.then(() => {
		console.log(">>> Connection has been established successfully.");
	})
	.catch((error) => {
		throw new Error(error);
	});

export default sequelizeConnectionString;
