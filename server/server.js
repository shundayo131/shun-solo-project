const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

const apiRouter = require('./routes/api');

console.log(process.env.NODE_ENV); 

// handling incoming request bodies as JSON
app.use(express.json());

// serve static file
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// define route hanlders  
app.use('/api', apiRouter);

// TODO - global error handler 

app.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`)
});