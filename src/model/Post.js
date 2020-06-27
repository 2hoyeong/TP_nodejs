const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    postNumber: { type: Number, required: true, unique: true },
    author: { type: String, required: true },
    boardName : { type: String, required: true },
    title: { type: String },
    content: { type: String },
    like : { type: Number, default: 0 },
    time : { type : Date, default: Date.now }
});

autoIncrement.initialize(mongoose.connection);
postSchema.plugin(autoIncrement.plugin, {
    model:'Post',
    field: 'postNumber',
    startAt: 1,
    increment: 1
});

module.exports = mongoose.model('Post', postSchema);