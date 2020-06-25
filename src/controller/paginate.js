const Post = require("../model/Post");

exports.getPostsPage = function(page, maxPost, callback) {
    const skipPost = page === 0 ? 0 : (page - 1) * maxPost;
    Post.find({})
    .sort({ createAt: -1 })
    .skip(skipPost)
    .limit(maxPost)
    .exec(results => callback(results));
}
