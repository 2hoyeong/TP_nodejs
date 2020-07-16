const User = require("../model/User");

const userAuthentication = {
    User : 0,
    Admin : 1,
    SuperAdmin : 5,
}

exports.authLoginCheck = function(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
}

exports.authAdminCheck = function(req, res, next) {
    if (authenticationCheck(req.session.user, "Admin")) {
        next();
    } else {
        res.redirect("/login");
    }
}

exports.authSuperAdminCheck = function(req, res, next) {
    if (authenticationCheck(req.session.user, "SuperAdmin")) {
        next();
    } else {
        res.redirect("/login");
    }
}

function authenticationCheck(user, level) {
    if (user.role >= userAuthentication[level]) {
        return true;
    } else {
        return false;
    }
}