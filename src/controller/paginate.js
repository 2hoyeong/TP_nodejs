const Post = require("../model/Post");

exports.getPostsPage = function(page, maxPost, title, callback) {
    const skipPost = (page <= 0) ? 0 : (page - 1) * maxPost;
    Post.find()
    .where('boardName').equals(title)
    /*.sort({ createAt: -1 })
    .skip(skipPost)
    .limit(maxPost)*/
    .exec()
    .then(results => {
        callback(results);
    })
    .catch(err => console.log(err));
}