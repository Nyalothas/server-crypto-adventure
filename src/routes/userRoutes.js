const express = require("express");
const userController = require('../controllers/userController');

const router = express.Router();

router.get("/", userController.getAllUsers);

router.get("/:userId", userController.getUser);

router.patch("/:userId", userController.updateFunds);

module.exports = router;
