exports.indexView = function (req, res) {
    const sess = req.session;
    res.render('index.html', {
        id: sess.user
    });
    /* (err, renderedData) => {
        if (err) console.log(err);
        res.send(renderedData);
    }); */
}