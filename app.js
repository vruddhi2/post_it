var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const indexRouter = require('./project-server/routes/index');

const userRouter = require('./project-server/routes/users');
const {requireAuth} = require('./middleware/auth');

require('./models/connect');


var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'project-server/public')));

app.set('views', path.join(__dirname, 'project-server', 'views'))
app.set('view engine', 'pug');
app.use('/', requireAuth , indexRouter);
app.use('/user', userRouter);
module.exports = app;
