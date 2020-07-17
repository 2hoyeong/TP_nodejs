const Area = require("../model/Area");

const areaType = {
  continent: 0,
  country: 1,
  city: 2,
  attraction: 3,
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

exports.addCountry = function (req, res) {
  const area = new Area();
  area.area_type = areaType[req.params.area_type];
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

exports.cityRegistView = function (req, res) {
  res.render("area/admin/city_regist.html", {
    id: req.session.user,
  });
};

exports.cityEditView = function (req, res) {
  res.render("area/admin/edit_city_info.html", {
    id: req.session.user,
  });
};

