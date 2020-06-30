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
    reply.postNumber = req.body.postNumber;
    reply.author = req.session.user;
    reply.content = req.body.comment;
    reply.save()
    .then(() => {return res.json({result: 1})})
    .catch(err => {
        res.json({result: 0, err});
        return;
    });
}