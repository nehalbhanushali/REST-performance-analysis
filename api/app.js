var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

var indexRouter = require('./routes/index');

const userRouter = require('./routes/users');
const groupRouter = require('./routes/groups');
const appRouter = require('./routes/apps');

app.get("/", (req, res) => {
  res.json({
    message: 'WELCOME TO THE REST API!',
  });
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter );
app.use('/groups', groupRouter );
app.use('/apps', appRouter );

module.exports = app;
