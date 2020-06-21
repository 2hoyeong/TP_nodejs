const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    id: { type: String, required: true, unique: true },
    boardName : { type: String, required: true },
    title: { type: String },
    content: { type: String },
    time : { type : Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);