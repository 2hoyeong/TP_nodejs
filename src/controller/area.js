
exports.getCountryList = function(req, res) {
    res.render('area/country/countryList.html', {
        id: req.session.user
    });
}