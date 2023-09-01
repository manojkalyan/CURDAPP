const express = require('express');



const app = express();
const port = 3000;
const db = require('./config/mongoose');
const costumMware = require('./config/midleware');
const flash = require('connect-flash');

const cookieParser = require('cookie-parser');


app.use(express.urlencoded()); // Parse incoming request bodies
app.use(cookieParser()); // Parse cookies
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pasportLocal = require('./config/passport_locals');
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts)
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



app.use(flash()); // Flash messages middleware for displaying flash messages
app.use(costumMware.setflash); // Custom middleware to set flash messages in the response
app.use('/', require('./routes'));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
