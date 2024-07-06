const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

const cookieParser = require('cookie-parser'); 

const apiRouter = require('./routes/api');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const sessionController = require('./controllers/sessionController');

// handling incoming request bodies as JSON
app.use(express.json());

// cookie parser - populate req.cookies
app.use(cookieParser());

// serve static file after middleware checks 
app.use(express.static(path.join(__dirname, '../build')));
// app.use(express.static(path.join(__dirname, '..')));


// app.use((req, res, next) => {
//   console.log(`Received ${req.method} request for ${req.url}`);
//   next();
// });

// root
// ISSUE: '/' route is not requested from a client now. index.html is served by webpack?? 
app.get('/', 
  sessionController.isLoggedIn,
  (req, res) => {
    console.log('serve index html')
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  }
);

// signup 
app.use('/signup', signupRouter);

// login 
app.use('/login', loginRouter);

// api
app.use('/api', apiRouter);

// TODO - global error handler 

app.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`)
});