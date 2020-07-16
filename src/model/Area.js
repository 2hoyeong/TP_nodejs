const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
/**
 * areaType
 * 0 : Continent
 * 1 : Country
 * 2 : City
 * 3 : Attraction
 **/

const areaSchema = new Schema({
    area_type: { type: Number, required: true },
    name_kor: { type: String, required: true },
    name_eng: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    like : { type: Number, default: 0 },
});

autoIncrement.initialize(mongoose.connection);
/* postSchema.plugin(autoIncrement.plugin, {
    model:'Post',
    field: 'postNumber',
    startAt: 1,
    increment: 1
}); */

module.exports = mongoose.model('Area', areaSchema);