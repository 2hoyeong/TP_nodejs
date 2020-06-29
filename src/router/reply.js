const router = require('express').Router();
const controller = require('../controller/reply');

router.post("/api/comment/write", controller.writeReply);

module.exports = router;