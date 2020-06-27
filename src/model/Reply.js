const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

const replySchema = new Schema({
    postNumber: { type: Number, required: true },
    replyNumber: { type: Number, required: true },
    author: { type: String, required: true },
    content: { type: String },
    time : { type : Date, default: Date.now }
});

autoIncrement.initialize(mongoose.connection);
replySchema.plugin(autoIncrement.plugin, {
    model:'Reply',
    field: 'replyNumber',
    startAt: 1,
    increment: 1
});

module.exports = mongoose.model('Reply', replySchema);