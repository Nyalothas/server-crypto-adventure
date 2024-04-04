const userService = require("../services/userService");

const getAllUsers = (req, res) => {
	const allUsers = userService.getAllUsers();
	res.send(allUsers);
};

const getUser = (req, res) => {
	const { params: { userId } } = req;

	if (!userId) {
		return;
	}

	const user = userService.getUser(+userId);
	res.send(user);
};

const updateFunds = (req, res) => {
	const {
		body,
		params: { userId }
	} = req;

	if (!userId) {
		return;
	}

	if (!body.amount) {
		return;
	}

	const updatedUser = userService.updateFunds(+userId, body);
	res.send(updatedUser);
};

// trade
const buyCoin = (req, res) => {
	const {
		body,
		params: { coinId }
	} = req;
	if (!coinId) {
		return;
	}

	if (!body.count) {
		return;
	}
	const coin = { count: body.count };

	const updatedCoin = userService.buyCoin(coinId, coin);
	res.send(updatedCoin);
};

module.exports = {
	getAllUsers,
	getUser,
	updateFunds
};
