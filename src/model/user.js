const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, required: true, unique: true },
    pw: { type: String, required: true, trim: true },
    salt: { type: String },
    email: String

});

userSchema.methods.verifiedPassword = function (pw, callback) {
    crypto.pbkdf2(pw, this.salt, 2346, 32, 'sha512', (err, key) => {
        if (key.toString('base64') === this.pw) {
            callback(null, true);
        } else {
            callback('Password is incorrect.');
        }
    });
}

userSchema.path('id').validate((value) => {
    return value.length >= 6 && value.length <= 14
}, "ID is too short or long (6 ~ 14)");

userSchema.pre('save', (next) => {
    crypto.randomBytes(32, (err, buf) => {
        this.salt = buf.toString('base64');
        crypto.pbkdf2(this.pw, this.salt, 2346, 32, 'sha512', (err, key) => {
            this.pw = key.toString('base64');
        });
    });
    next();
});

module.exports = mongoose.model('user', userSchema);