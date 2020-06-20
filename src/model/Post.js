const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    id: { type: String, required: true, unique: true },
     
    title: { type: String },
    content: { type: String },
    // date
});

module.exports = mongoose.model('Post', postSchema);