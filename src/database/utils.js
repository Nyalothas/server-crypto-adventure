const fs = require('fs');

const saveToDatabase = (DB) => {
	fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
		encoding: "utf-8",
	});
};

const saveToDatabaseList = (DB) => {
	fs.writeFileSync("./src/database/dbList.json", JSON.stringify(DB, null, 2), {
		encoding: "utf-8",
	});
};

const saveToUsersDatabase = (DB) => {
	fs.writeFileSync("./src/database/dbUsers.json", JSON.stringify(DB, null, 2), {
		encoding: "utf-8",
	});
};

module.exports = { saveToDatabase, saveToDatabaseList, saveToUsersDatabase };
