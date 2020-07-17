const router = require('express').Router();
const controller = require('../controller/area');
const authCheck = require('./authCheck');


router.get("/area/", authCheck.authLoginCheck, controller.getCountryList);
router.get("/area/regist", authCheck.authAdminCheck, controller.cityRegistView);
router.get("/area/edit", authCheck.authAdminCheck, controller.cityEditView);

router.post("/api/area/add/:area_type", authCheck.authAdminCheck, controller.addCountry);

module.exports = router;
