const express = require("express")
const session = require('express-session');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');

const router = require('./src/router/index');

const options = {
    host: "0.0.0.0",
    port: 3000
};

class Server {
    app = null;

    constructor() {
        this.app = express();

        this.setMiddleware();
        this.setRoute();
        this.setEngine();
    }

    setMiddleware() {
        this.app.use(express.static('public'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(session({
            secret: 'H*@U#FDNFOSIFJREUtest',
            resave: false,
            saveUninitialized: true
        }));
    }

    setRoute() {
        this.app.use(router);
    }

    setEngine() {
        // this.app.set('views', './views');
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'ejs');
        this.app.engine('html', ejs.renderFile); 
    }

    listen() {
        this.app.listen(options, () => console.log(`http://${options.host}:${options.port}`));
    }

    async start() {
        this.listen();
    }
}

module.exports = Server;