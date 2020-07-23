const Enum = require('enum')

const AreaEnum = new Enum({
    continent: {code : 0, name : "대륙"},
    country: {code : 1, name : "나라"},
    city: {code : 2, name : "도시"},
    attraction: {code : 3, name : "명소"},
});

module.exports = AreaEnum;