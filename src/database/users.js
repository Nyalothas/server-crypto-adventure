const DB = require("./dbUsers.json");
const { saveToUsersDatabase } = require("./utils");

const getAllUsers = () => {
	return DB.users;
};

const getUser = (userId) => {
	const user = DB.users.find((user) => user.id === userId);
	if (!user) {
		return;
	}

	return user;
};

const updateFunds = (userId, changes) => {
	const indexForUpdate = DB.users.findIndex((user) => user.id === userId);

	if (indexForUpdate === -1) {
		return;
	}

	DB.users[indexForUpdate].funds = changes.amount;
	saveToUsersDatabase(DB);

	const user = DB.users[indexForUpdate];

	return user;
};


module.exports = {
	getAllUsers,
	getUser,
	updateFunds
};
