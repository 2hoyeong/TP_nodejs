const Post = require("../model/Post");
const paginate = require('./paginate');

const boardName = {
    freeboard : "자유게시판",
    qna : "Q&A"
}

exports.registPost = function (req, res) {
    const post = new Post();
    post.author = req.session.user;
    post.boardName = req.params.title;
    post.title = req.body.bTitle;
    post.content = req.body.bContent;

    console.log("POST : " + post);

    post.save()
    .then(() => {return res.json({result: 1})})
    .catch(err => {
        res.json({result: 0, err});
        return;
    });
}


exports.viewPostList = function (req, res) {
    const title = req.params.title;
    const page = req.params.page;
    const maxPostOnPage = 10;
    paginate.getPostsPage(page, maxPostOnPage, title, (result) => {
        console.log("RESULT : " + result);
        res.render('board/board.html',    
        {
            id: req.session.user,
            board_title_name: boardName[title],
            board_title: title,
            page: page,
            posts : result
        });
    });
}

exports.postRest = function (req, res) {
    Post.remove({}, (err) => {
        console.log(err);
        console.log('collection removed');
    });
}