const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

const cookieParser = require('cookie-parser'); 

const apiRouter = require('./routes/api');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');

console.log(process.env.NODE_ENV); 

// handling incoming request bodies as JSON
app.use(express.json());

// serve static file
app.use(express.static(path.join(__dirname, '../build')));

// serve static files from the root directory
app.use(express.static(path.join(__dirname, '..')));

// cookie parser - populate req.cookies
app.use(cookieParser());

// root 
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

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