const router = require('express').Router();
const controller = require('../controller/post');

const boardName = {
    freeboard : "자유게시판",
    qna : "Q&A"
}

router.get("/board/:title/:page", (req, res) => {
    const title = req.params.title;
    const page = req.params.page;
    res.render('board/board.html',    
    {
        id: req.session.user,
        board_title_name: boardName[title],
        board_title: title,
        page: page
    });
});

router.get("/board_write/:title", (req, res) => {
    const title = req.params.title;
    res.render('board/board_write.html',
    {
        id: req.session.user,
        board_title_name: boardName[title],
        board_title: title
    })
})

router.post("/board/write/:title", controller.registPost);

module.exports = router;
