const express = require('express')
const path = require('path');
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
// const AutoIncrement = require('mongoose-sequence')(mongoose);
const cron = require('./config/cron')
// const sockets = require('./config/sockets')

const bootstrap = require('./config/bootstrap')
const router = require('./config/routes')

const { HOST, PORT } = process.env
const app = express()

const moment = require('moment');
const _ = require('lodash');
global.moment = moment;
global._ = _;

app.use(cors({origin: '*', credentials: false, "methods": "GET,HEAD,PUT,PATCH,POST,DELETE" }));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false, limit: '60mb' }))
app.use(bodyParser.json({ limit: '60mb' }))

// API ROUTES
app.use('/api/v1', router)
app.use(express.static(path.join(__dirname, "../public")));
app.use('/api/public', express.static(path.join(__dirname, 'api', 'public')));

app.get('/', (req, res) => {
  res.json({ message: "All Notifications" });
});
const server = app.listen(PORT);
console.log('HOST: ', HOST);
bootstrap(HOST, PORT)

if (process.env.NODE_ENV === 'production') {
    cron()
}

//sockets(server)
