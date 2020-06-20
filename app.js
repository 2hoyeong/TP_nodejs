require('dotenv').config();
const express = require("express")
const session = require('express-session');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const indexRouter = require('./src/router/index');
const loginRouter = require('./src/router/login');
const boardRouter = require('./src/router/board')

const options = {
    host: process.env.HOST,
    port: process.env.PORT
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
        mongoose.Promise = global.Promise;
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('Successfully connected to mongodb'))
            .catch(e => console.error(e));
    }
}

module.exports = Server;