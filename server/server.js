const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

// [TO DO] set up server

// initial setup 

// handling incoming request bodies as JSON
app.use(express.json());

// serve static file
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// now testing to handle get request to /api route
app.get('/api', (req, res) => {
  return res.status(200).json('this is a response from server'); 
});

app.listen(PORT, () => {
  console.log('server is running on the port ${PORT}')
});