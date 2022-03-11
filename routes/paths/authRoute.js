const { Router } = require("express");
const authController = require("../../controllers/authController.js");
const router = Router();

router.post("/login", authController.login);

module.exports = router;
