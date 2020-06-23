const User = require("../model/User");
const crypto = require('crypto');

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
        res.json({result: 0, error: "패스워드를 올바르게 두번 입력하세요."});
        return;
    }

    generateSalt(32)
    .then(salt => {
        user.salt = salt;
        return encryptPassword(user.pw, salt);
    })
    .then(key => {
        user.pw = key;
        return user.save();
    })
    .then(() => {return res.json({result: 1})})
    .catch(err => {
        res.json({result: 0, err});
        return;
    });
}

exports.loginCheck = function(req, res) {
    const id = req.body.id;
    const pw = req.body.password;
    let user;
    const sess = req.session;
    User.find().where('id').equals(id).exec()
    .then(results => {
        user = results[0];
        return encryptPassword(pw, user.salt);
    })
    .then((key) => {
        if (key === user.pw) {
            sess.user = id;
            res.redirect('/');
        } else {
            throw '비밀번호가 맞지 않음';
        }
    })
    .catch(e => {
        res.json({result: 0, error: "ID와 비밀번호를 확인해주세요."});
    })
}

const encryptPassword = function (plainPw, salt) {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(plainPw, salt, 2346, 32, 'sha512', (err, key) => {
            if (err) {
                reject(err);
            }
            resolve(key.toString('base64'));
        });
    });
}

const generateSalt = function(length) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(length, (err, buf) => {
            if (err) {
                reject(err);
            }
            resolve(buf.toString('base64'));
        });
    });
}

exports.logout = function (req, res) {
    const sess = req.session;
    sess.destroy(() => {
        sess;
    });
    res.redirect('/');
}