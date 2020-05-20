/* === Dependencies === */
const express = require("express");
// const path = require("path");
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const routes = require('./routes/index');
const fileUpload = require("express-fileupload");
/* === Set the PORT to work with deployment environment === */
const PORT = process.env.PORT || 3001;
/* === Call Express as app === */
const app = express();


/* === Middleware === */
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(flash());


app.use(passport.session());
app.use(express.static(__dirname + '/client/build'))

app.use(fileUpload())

app.post("/upload", (req, res) => {
  // console.log("UPLOAD", req.files)
  if (req.files === null) {
    return res.status(400).json({ msg: "No File Uploaded" })
  }
  const file = req.files.file
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.log("Made it this far");
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });

})




/* === Routing === */

app.use(routes);

/* === Express 404 error handler === */
app.use(function (req, res, next) {
  var err = new Error('404 in Server.js, route Not Found');
  err.status = 404;
  next(err);
});

/* === Server-Side Authentication w/passport.js on our Model === */
const Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

/* === Mongoose Connection === */
// mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/LugsNGrub', { useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/LugsNGrub');

/* === Error Handling === */

/* Development error handler will print stacktrace */
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

/* Production error handler no stacktraces leaked to user */
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


/* === Telling Express to Listen === */
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

