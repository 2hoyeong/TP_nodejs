const Post = require("../model/Post");
const paginate = require('./paginate');

const boardName = {
    freeboard : "자유게시판",
    qna : "Q&A"
}

exports.registPost = function (req, res) {
    const post = new Post();
    post.id = req.session.user;
    post.boardName = req.params.title;
    post.title = req.body.bTitle;
    post.content = req.body.bContent;
    console.log(post);

    post.save()
    .then(() => {return res.json({result: 1})})
    .catch(err => {
        res.json({result: 0, err});
        return;
    });
}

/* 
const board = Post.find({})
.sort({ createAt: -1 })
.skip(hidePost)
.limit(maxPost);
*/

exports.viewPostList = function (req, res) {
    const title = req.params.title;
    const page = req.params.page;
    const maxPostOnPage = 10;
    paginate.getPostsPage(page, maxPostOnPage, (result) => {
        console.log(result);
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