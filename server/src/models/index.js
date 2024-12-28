import { UserModel } from "./user.model";
import { TestModel } from "./test.model";
import { RoleModel } from "./role.model";

const models = {
	RoleModel,
	UserModel,
	TestModel,
};

(async () => {
	try {
		for (const key in models) {
			models[key]
				.sync({ alter: true })
				.then(() => {
					console.log(`${key} created success !!!`);
				})
				.catch((error) => {
					throw new Error(error);
				});
		}
	} catch (error) {
		throw error;
	}
})();

export { UserModel, TestModel, RoleModel };
