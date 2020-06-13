const express = require("express")
const session = require('express-session');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express()
const options = {
  host: "0.0.0.0",
  port: 3000
};

app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'H*@U#FDNFOSIFJREUtest',
  resave: false,
  saveUninitialized: true
}));

app.get("/", (req, res) => {
  app.render('header.html', (err, renderedData) => {
    if (err) console.log(err);
    res.send(renderedData);
  });
});

app.listen(options, () =>
  console.log(`http://${options.host}:${options.port}`)
)

module.exports = app;