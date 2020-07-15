const router = require('express').Router();
const controller = require('../controller/area');
const authCheck = require('./authCheck');


router.get("/area/", authCheck.authLoginCheck, controller.getCountryList);

//router.post("/api/area/add/:area_type", authCheck.authAdminCheck, controller.addCountry);
router.post("/api/area/add/country", authCheck.authAdminCheck, controller.addCountry);

module.exports = router;
