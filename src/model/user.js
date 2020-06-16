const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, required: true, unique: true },
    pw: { type: String, required: true, trim: true },
    salt: { type: String },
    email: String

});

userSchema.methods.verifiedPassword = function (plainPw, callback) {
    crypto.pbkdf2(plainPw, this.salt, 2346, 32, 'sha512', (err, key) => {
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

userSchema.post('save', (doc) => {
    console.log(doc.pw);
    crypto.randomBytes(32, (err, buf) => {
        doc.salt = buf.toString('base64');
        crypto.pbkdf2(doc.pw, doc.salt, 2346, 32, 'sha512', (err, key) => {
            doc.pw = key.toString('base64');
        });
    });
});

module.exports = mongoose.model('user', userSchema);