require('dotenv').config();
const express = require("express")
const session = require('express-session');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const indexRouter = require('./src/router/index');
const loginRouter = require('./src/router/login');
const boardRouter = require('./src/router/board');
const replyRouter = require('./src/router/reply');
const areaRouter = require('./src/router/area');

const options = {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || '3000'
};

class Server {
    app = null;

    constructor() {
        this.app = express();

        this.setMiddleware();
        this.setRoute();
        this.setEngine();
        this.setDB();
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
        this.app.use(indexRouter);
        this.app.use(loginRouter);
        this.app.use(boardRouter);
        this.app.use(replyRouter);
        this.app.use(areaRouter);
    }

    setEngine() {
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

    async setDB() {
        const Uri = process.env.MONGO_URI || "mongodb://localhost/travelplanner"
        mongoose.Promise = global.Promise;
        mongoose.connect(Uri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('Successfully connected to mongodb'))
            .catch(e => console.error(e));
    }
}

module.exports = Server;