const express = require('express');



const app = express();
const port = 3000;
const db = require('./config/mongoose');

const cookieParser = require('cookie-parser');

// const mongoose = require('mongoose');

app.use(express.urlencoded()); // Parse incoming request bodies
app.use(cookieParser()); // Parse cookies
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pasportLocal = require('./config/passport_locals');

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(
  session({
    secret: 'blah', // Secret key used to sign the session ID cookie
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 1000 // Set the maximum age of the session to 1 hour (in milliseconds)
    },
  })
);

app.use(passport.initialize()); // Initialize passport for authentication
app.use(passport.session()); // Use session-based authentication with passport
app.use(passport.setAuthenticationuser); // Custom middleware to set authenticated user information




app.use('/', require('./routes'));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
