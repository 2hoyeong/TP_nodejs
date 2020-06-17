const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, required: true, unique: true },
    pw: { type: String, required: true, trim: true },
    salt: { type: String, required: true },
    email: String

});

userSchema.path('id').validate((value) => {
    return value.length >= 6 && value.length <= 14
}, "아이디가 너무 길거나 짧습니다. (6 ~ 14)");

userSchema.pre('save', (next) => {
    /* const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmail = re.test(String(this.email).toLowerCase());
    if (!isEmail) {
        throw new Error("이메일 형식이 맞지 않습니다.");
    } */
    next();
})

module.exports = mongoose.model('User', userSchema);