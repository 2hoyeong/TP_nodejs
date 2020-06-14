const router = require('express').Router();
const controller = require('../controller/login');

router.get("/login", controller.loginView);
router.get("/forgot_id", controller.forgotIdView);
router.get("/forgot_pw", controller.forgotPwView);

module.exports = router;