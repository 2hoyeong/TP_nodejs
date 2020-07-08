const router = require('express').Router();
const controller = require('../controller/area');
const authCheck = require('./authCheck');


router.get("/area/", authCheck.authLoginCheck, controller.getCountryList);

module.exports = router;
