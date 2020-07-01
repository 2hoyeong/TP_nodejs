const router = require('express').Router();
const controller = require('../controller/post');

const boardName = {
    freeboard : "자유게시판",
    qna : "Q&A"
}

router.get("/board/:title/:page", controller.viewPostList);

router.get("/board_write/:title", (req, res) => {
    const title = req.params.title;
    res.render('board/board_write.html',
    {
        id: req.session.user,
        board_title_name: boardName[title],
        board_title: title
    })
})

router.get("/board_view/:postId", controller.viewPost);

router.post("/api/board/write/:title", controller.registPost);

// router.get("/board/reset", controller.postRest); // for debug

module.exports = router;
