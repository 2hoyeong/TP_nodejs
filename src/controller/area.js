const Area = require("../model/Area");

const areaType = {
  0: "Continent",
  1: "Country",
  2: "City",
  3: "Attraction",
};

exports.getCountryList = function (req, res) {
  Area.find({})
    .where("areaType")
    .equals(1)
    .exec()
    .then((countries) => {
      res.render("area/country/countryList.html", {
        id: req.session.user,
        countryList: countries,
      });
    });
};
/**
 * "area_type" : "1",
                "name_kor" : "대한민국",
                "name_eng" : "Korea",
                "image" : "",
                "description" : "",
 */
exports.addCountry = function (req, res) {
  const area = new Area();
  //area.area_type = areaType[req.params.area_type];
  area.area_type = 1;
  area.name_kor = req.body.name_kor;
  area.name_eng = req.body.name_eng;
  area.image = req.body.image;
  area.description = req.body.description;
  area
    .save()
    .then(() => {
      return res.json({ result: 1 });
    })
    .catch((err) => {
      res.json({ result: 0, err });
      return;
    });
};
