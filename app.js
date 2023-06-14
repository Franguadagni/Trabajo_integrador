var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session")

var productosRouter = require ('./routes/productos')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "Este es mi secreto",
  resave: false,
  saveUninitialized: false,
}))
app.use(function(req,res,next){
  console.log('Esta es la cookie desde app')
  console.log(req.cookies)
  if(req.session.user !== undefined ){//|| req.cookies.rememberUser){
    res.locals.isLogged = true
    res.locals.user = req.session.user
  } else{
    res.locals.isLogged = false
  }
  return next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
