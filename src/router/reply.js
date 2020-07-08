const router = require('express').Router();
const controller = require('../controller/reply');
const authCheck = require('./authCheck');

router.post("/api/comment/write", authCheck.authLoginCheck, controller.writeReply);

module.exports = router;