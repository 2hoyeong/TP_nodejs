const Enum = require('enum')

const AuthEnum = new Enum({
    User : 0,
    Admin : 1,
    SuperAdmin : 5,
});

module.exports = AuthEnum; 