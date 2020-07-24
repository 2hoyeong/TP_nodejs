const router = require('express').Router();
const controller = require('../controller/area');
const authCheck = require('./authCheck');


router.get("/area/", authCheck.authLoginCheck, controller.getCountryList);
router.get("/area/regist/:area_type", authCheck.authAdminCheck, controller.areaRegistView);
router.get("/area/regist/:area_type/edit/:area_id", authCheck.authAdminCheck, controller.areaEditView);
router.get("/area/regist/:area_type/edit/", authCheck.authAdminCheck, controller.areaEditView);

router.post("/api/area/add/:area_type", authCheck.authAdminCheck, controller.addCountry);

module.exports = router;
