const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const routes = require('./src/routes');
const coinRoutes = require('./src/routes/coinRoutes');

const app = express();
const PORT = process.env.PORT || 80;

app.use(cors());

app.get("/", (req, res) => {
	res.send("<h2>It's Working!</h2>");
});

app.use(bodyParser.json());
app.use('/api', routes);
app.use('/api/coins', coinRoutes);

app.listen(PORT, () => {
	console.log(`API is listening on port ${PORT}`);
});
