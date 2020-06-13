const router = require('express').Router();
const controller = require('../controller/index');

router.get("/", controller.indexView);

module.exports = router;