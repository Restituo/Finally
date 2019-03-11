const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const session = require('express-session')
const passport = require('./passport');
const user = require('./routes/user')
const routes = require('./routes/api')
const MongoStore = require('connect-mongo')(session)

// Sessions
app.use(
	session({
		secret: 'keyboard-cat', 
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) 
//Middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fakereddit");

// Add routes
app.use('/user', user)
app.use('/', routes)

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
