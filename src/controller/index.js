exports.indexView = function (req, res) {
    res.render('index.html', (err, renderedData) => {
        if (err) console.log(err);
        res.send(renderedData);
    });
}