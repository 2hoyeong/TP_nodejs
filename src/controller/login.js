exports.loginView = function (req, res) {
    res.render('login/login.html', (err, renderedData) => {
        if (err) console.log(err);
        res.send(renderedData);
    });
}

exports.forgotIdView = function(req, res) {
    res.render('login/forgot_id.html', (err, renderedData) => {
        if (err) console.log(err);
        res.send(renderedData);
    });
}

exports.forgotPwView = function(req, res) {
    res.render('login/forgot_pw.html', (err, renderedData) => {
        if (err) console.log(err);
        res.send(renderedData);
    });
}