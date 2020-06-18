const router = require('express').Router();
const controller = require('../controller/login');

router.get("/login", controller.loginView);
router.get("/forgot_id", controller.forgotIdView);
router.get("/forgot_pw", controller.forgotPwView);
router.get("/register", controller.registerView);

router.post("/api/login", controller.loginCheck);
router.post("/api/register", controller.userRegister);
router.get("/api/logout", controller.logout);

module.exports = router;