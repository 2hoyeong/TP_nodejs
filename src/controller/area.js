const Area = require("../model/Area");
const areaType = require('../model/enum/area_enum')

exports.getCountryList = function (req, res) {
  getAreaListByType(type)
    .then((countries) => {
      res.render("area/country/countryList.html", {
        id: req.session.user,
        countryList: countries,
      });
    });
};

exports.addCountry = function (req, res) {
  const area = new Area();
  area.area_type = areaType[req.params.area_type].value.code;
  area.name_kor = req.body.name_kor;
  area.name_eng = req.body.name_eng;
  area.image = req.body.image;
  area.description = req.body.description;
  area.save()
    .then(() => {
      return res.json({ result: 1 });
    })
    .catch((err) => {
      res.json({ result: 0, err });
      return;
    });
};

exports.areaRegistView = function (req, res) {
  res.render("area/admin/area_regist.html", {
    id: req.session.user,
  });
};

exports.areaEditView = function (req, res) {
  let editedArea;
  const isAddAreaMode = req.params.area_id === undefined
  if (isAddAreaMode) {
    editedArea = undefined
  } else {
    editedArea = getAreaById(req.params.area_id);
  }
  
  res.render("area/admin/area_edit.html", {
    id: req.session.user,
    area: editedArea,
    area_type_name : areaType[req.params.area_type].value.name,
  });
};

const getArea = function(where, equal) {
  return new Promise((resolve, reject) => {
    Area.find({})
    .where(where).equals(equal)
    .exec()
    .then((countries) => {
      resolve(countries);
    })
    .catch((err) => {
      reject(err);
    })
});
}

const getAreaListByType = function(type) {
  return new Promise((resolve, reject) => {
      getArea("area_type", type)
      .then((countries) => {
        resolve(countries);
      })
      .catch((err) => {
        reject(err);
      })
  });
}

const getAreaById = function(id) {
  return new Promise((resolve, reject) => {
      getArea("area_id", id)
      .then((countries) => {
        resolve(countries);
      })
      .catch((err) => {
        reject(err);
      })
  });
}