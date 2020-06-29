const Reply = require("../model/Reply");

exports.getReplysPost = function(postNum, callback) {
    return new Promise((resolve, reject) => {
        Reply.find({})
        .where('postNumber').equals(postNum).exec()
        .then(results => {
            resolve(results);
        })
        .catch(err => reject(err));
    });
}

exports.writeReply = function(req, res) {
    const reply = new Reply();
    reply.postNumber = req.body.
    reply.author 
    reply.content = req.body.
}