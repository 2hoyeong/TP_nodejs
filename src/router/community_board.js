const router = require('express').Router();
// const controller = require('../controller/index');

router.get("/community_board", (req, res) => {
    res.render('board/community_board.html',    
    {
        id: req.session.user,
        board_title: '자유게시판'
    });
});

module.exports = router;