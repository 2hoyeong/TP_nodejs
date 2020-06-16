const User = require("../model/user");

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

exports.registerView = function(req, res) {
    res.render('login/register.html', (err, renderedData) => {
        if (err) console.log(err);
        res.send(renderedData);
    });
}

exports.userRegister = function(req, res) {
    const user = new User();
    user.id = req.body.id;
    user.pw = req.body.password_1;
    user.email = req.body.email;

    if (req.body.password_1 !== req.body.password_2) {
        res.json({result: 0, error: "password does not matched"})
        return;
    }

    user.save((err) => {
        if (err) {
            console.log(err);
            res.json({result: 0, err});
            return;
        }
        res.json({result: 1})
    });
}

exports.loginCheck = function(req, res) {
    const user = {
        id : req.body.id,
        pw : req.body.password
    };

    
}