import { User } from "./user.model";
import { Test } from "./test.model";

const models = {
	UserModel: User,
	TestModel: Test,
};

(async () => {
	try {
		for (const key in models) {
			models[key]
				.sync()
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

export { User, Test };
