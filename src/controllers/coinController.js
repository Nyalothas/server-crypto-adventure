const coinService = require("../services/coinService");

const getAllCoins = (req, res) => {
	const allCoins = coinService.getAllCoins();
	res.send({ status: "OK", data: allCoins });
};

const getOneCoin = (req, res) => {
	const {
		params: { coinId },
	} = req;
	if (!coinId) {
		return;
	}
	const coin = coinService.getOneCoin(coinId);
	res.send({ status: "OK", data: coin });
};

const createNewCoin = (req, res) => {
	const { body } = req;
	if (
		!body.name ||
		!body.price
	) {
		return;
	}
	const newCoin = {
		name: body.name,
		price: body.price
	};
	const createdCoin = coinService.createNewCoin(newCoin);
	res.status(201).send({ status: "OK", data: createdCoin });
};

const updateOneCoin = (req, res) => {
	const {
		body,
		params: { coinId },
	} = req;
	if (!coinId) {
		return;
	}
	const updatedCoin = coinService.updateOneCoin(coinId, body);
	res.send({ status: "OK", data: updatedCoin });
};

const deleteOneCoin = (req, res) => {
	const {
		params: { coinId },
	} = req;
	if (!coinId) {
		return;
	}
	coinService.deleteOneCoin(coinId);
	res.status(204).send({ status: "OK" });
};


// trade
const buyOneCoin = (req,res) => {
	const {
		body,
		params: { coinId },
	} = req;
	if (!coinId) {
		return;
	}
	const updatedCoin = coinService.buyOneCoin(coinId, body);
	res.send({ status: "OK", data: updatedCoin });
};

module.exports = {
	getAllCoins,
	getOneCoin,
	createNewCoin,
	updateOneCoin,
	deleteOneCoin,

	buyOneCoin
};
