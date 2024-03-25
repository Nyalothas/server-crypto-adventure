const { v4: uuid } = require("uuid");
const Coin = require("../database/coin");

const getAllCoins = () => {
	const allCoins = Coin.getAllCoins();
	return allCoins;
};

const getOneCoin = (coinId) => {
	const coin = Coin.getOneCoin(coinId);
	return coin;
};

const createNewCoin = (newCoin) => {
	const coinToInsert = {
		...newCoin,
		id: uuid(),
		createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
		updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
	};
	const createdCoin = Coin.createNewCoin(coinToInsert);
	return createdCoin;
};

const updateOneCoin = (coinId, changes) => {
	const updatedCoin = Coin.updateOneCoin(coinId, changes);
	return updatedCoin;
};

const deleteOneCoin = (coinId) => {
	Coin.deleteOneCoin(coinId);
};

const buyOneCoin = (coinId, changes) => {
	const updatedCoin = Coin.buyOneCoin(coinId, changes);
	return updatedCoin;
};

module.exports = {
	getAllCoins,
	getOneCoin,
	createNewCoin,
	updateOneCoin,
	deleteOneCoin,

	buyOneCoin
};
