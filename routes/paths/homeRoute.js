const { Router } = require("express");
const homeController = require("../../controllers/homeController.js");
const router = Router();

router.get("/", homeController.getApod);

module.exports = router;
