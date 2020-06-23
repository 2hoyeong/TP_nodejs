const Post = require("../model/Post");


exports.registPost = function (req, res) {
    const post = new Post();
    post.id = req.session.user;
    post.boardName = req.params.title;
    post.title = req.body.bTitle;
    post.content = req.body.bContent;
    console.log(post);
}