const router = require('express').Router();
// const controller = require('../controller/index');

const boardName = {
    freeboard : "자유게시판",
    qna : "Q&A"
}

router.get("/board/:title", (req, res) => {
    const title = req.params.title;
    res.render('board/board.html',    
    {
        id: req.session.user,
        board_title: boardName[title]
    });
});

router.get("/board_write/:title", (req, res) => {
    const title = req.params.title;
    res.render('board/board_write.html',
    {
        id: req.session.user,
        board_title: boardName[title]
    })
})

module.exports = router;
