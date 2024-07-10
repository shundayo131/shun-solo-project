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

// root 

/* ISSUE
In production, this ensures that the isLoggedIn middleware is executed before serving the index.html file.
However, in development, this route is not hit because webpack-dev-server is serving files directly.
I wonder if I should change a webpack config to address the issue for dev, but not sure how... 
*/ 

app.get('/', 
  sessionController.isLoggedIn,
  (req, res) => {
    console.log('serve index html')
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  }
);

// Serve static files from the 'build' directory (for production)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
}

// serve static file after middleware checks for production 
// app.use(express.static(path.join(__dirname, '../build'))); // for production

// signup 
app.use('/signup', signupRouter);

// login 
app.use('/login', loginRouter);

// api
app.use('/api', apiRouter);

// Catch-all route to serve index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

// TODO - global error handler 

app.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`)
});