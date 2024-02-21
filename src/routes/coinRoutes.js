const express = require("express");
const coinController = require('../controllers/coinController');

const router = express.Router();

router.get("/", coinController.getAllCoins);

router.get("/:coinId", coinController.getOneCoin);

router.post("/", coinController.createNewCoin);

router.patch("/:coinId", coinController.updateOneCoin);

router.delete("/:coinId", coinController.deleteOneCoin);

module.exports = router;