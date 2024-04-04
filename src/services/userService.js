const Users = require("../database/users");

const getAllUsers = () => {
	const allUsers = Users.getAllUsers();
	return allUsers;
};

const getUser = (userId) => {
	const user = Users.getUser(userId);
	return user;
};

const updateFunds = (userId, changes) => {
	const updatedUser = Users.updateFunds(userId, changes);
	return updatedUser;
};

module.exports = {
	getAllUsers,
	getUser,
	updateFunds
};
