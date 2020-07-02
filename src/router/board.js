const router = require('express').Router();
const controller = require('../controller/post');
const authCheck = require('./authCheck');

const boardName = {
    freeboard : "자유게시판",
    qna : "Q&A"
}

router.get("/board/:title/:page", authCheck.authChecker, controller.viewPostList);

router.get("/board_write/:title", authCheck.authChecker, (req, res) => {
    const title = req.params.title;
    res.render('board/board_write.html',
    {
        id: req.session.user,
        board_title_name: boardName[title],
        board_title: title
    })
})

router.get("/board_view/:postId", authCheck.authChecker, controller.viewPost);

router.post("/api/board/write/:title", authCheck.authChecker, controller.registPost);

// router.get("/board/reset", controller.postRest); // for debug

module.exports = router;
