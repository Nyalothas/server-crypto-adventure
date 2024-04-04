const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllCoins = () => {
	return DB.coins;
};

const getOneCoin = (coinId) => {
	const coin = DB.coins.find((coin) => coin.id === coinId);
	if (!coin) {
		return;
	}
	return coin;
};

const createNewCoin = (newCoin) => {
	const isAlreadyAdded =
		DB.coins.findIndex((coin) => coin.name === newCoin.name) > -1;
	if (isAlreadyAdded) {
		return;
	}
	DB.coins.push(newCoin);
	saveToDatabase(DB);
	return newCoin;
};

const updateOneCoin = (coinId, changes) => {
	const indexForUpdate = DB.coins.findIndex(
		(coin) => coin.id === coinId
	);
	if (indexForUpdate === -1) {
		return;
	}
	const updatedCoin = {
		...DB.coins[indexForUpdate],
		...changes,
		updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
	};
	DB.coins[indexForUpdate] = updatedCoin;
	saveToDatabase(DB);
	return updatedCoin;
};

const deleteOneCoin = (coinId) => {
	const indexForDeletion = DB.coins.findIndex(
		(coin) => coin.id === coinId
	);
	if (indexForDeletion === -1) {
		return;
	}
	DB.coins.splice(indexForDeletion, 1);
	saveToDatabase(DB);
};

const buyCoin = (coinId, changes) => {
	const indexForUpdate = DB.coins.findIndex(
		(coin) => coin.id === coinId
	);
	if (indexForUpdate === -1) {
		return;
	}
	const updatedCoin = {
		...DB.coins[indexForUpdate],
		...changes,
		updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
	};
	DB.coins[indexForUpdate] = updatedCoin;
	saveToDatabase(DB);

	const returnedData = {
		...changes,
		name: DB.coins[indexForUpdate].name,
		id: DB.coins[indexForUpdate].id
	};

	return returnedData;
};

module.exports = {
	getAllCoins,
	createNewCoin,
	getOneCoin,
	updateOneCoin,
	deleteOneCoin,

	buyCoin
};
