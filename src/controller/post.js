const Post = require("../model/Post");


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