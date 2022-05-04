var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const history = require('connect-history-api-fallback');
const cors = require('cors'); // 서버에서 처리해주는 방법 (데브 프록시서버와는 다른 방법)

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const memoRouter = require('./routes/apimemo');
const commentRouter = require('./routes/apicomment');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(history()); 
app.use(cors()); // cors조약에 대한 부분으로서 교차출처 http를 요청하여 접근가능한 권한 부여하도록 브라우저에 알려주는 체제
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/memo', memoRouter);
app.use('/api/comment', commentRouter);

module.exports = app;
