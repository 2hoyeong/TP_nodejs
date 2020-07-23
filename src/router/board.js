const router = require('express').Router();
const controller = require('../controller/post');
const authCheck = require('./authCheck');
const boardName = require('../model/enum/board_enum')

router.get("/board/:title/:page", authCheck.authLoginCheck, controller.viewPostList);

router.get("/board_write/:title", authCheck.authLoginCheck, (req, res) => {
    const title = req.params.title;
    res.render('board/board_write.html',
    {
        id: req.session.user,
        board_title_name: boardName[title],
        board_title: title
    })
})

router.get("/board_view/:postId", authCheck.authLoginCheck, controller.viewPost);

router.post("/api/board/write/:title", authCheck.authLoginCheck, controller.registPost);

// router.get("/board/reset", controller.postRest); // for debug

module.exports = router;
