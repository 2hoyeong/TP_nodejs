const router = require('express').Router();
// const controller = require('../controller/index');

const boardName = {
    freeboard : "자유게시판",
    qna : "Q&A"
}

router.get("/community_board", (req, res) => {
    const title = req.query.board_title ? req.query.board_title : "freeboard";
    res.render('board/community_board.html',    
    {
        id: req.session.user,
        board_title: boardName[title]
    });
});

router.get("/board_write", (req, res) => {
    const title = req.query.board_title ? req.query.board_title : "freeboard";
    res.render('board/board_write.html',
    {
        id: req.session.user,
        board_title: boardName[title]
    })
})

module.exports = router;