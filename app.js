const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const apiConstants = require('./commons/api-constants');
const userController = require('./users/user.controller');
const carsController = require('./cars/car.controller');
const ridesController = require('./rides/ride.controller');
const jwt = require('./config/jwt');

const baseApiPath = apiConstants.baseApiPath.concat(apiConstants.apiVersion);
const userPath = '/users';
const carsPath = '/cars';
const ridesPath = '/rides';

let app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
// Using jwt
app.use(jwt());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(baseApiPath + userPath, userController);
app.use(baseApiPath + carsPath, carsController);
app.use(baseApiPath + ridesPath, ridesController);

module.exports = app;
