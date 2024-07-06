const express = require('express');
const path = require('path'); 
const router = express.Router();
// import middlewares 
const userController = require('../controllers/userController.js');
const sessionController = require('../controllers/sessionController.js');
const cookieController = require('../controllers/cookieController.js');

router.get('/', (req, res) => {
  console.log('login router receives a get request');
  res.sendFile(path.resolve(__dirname, '../../client/login.html'));
});

router.post('/', 
  // add middlewares (userController.verifyUser, sessionController.startSession, cookieController.setSSIDCookie)
  userController.verifyUser, 
  sessionController.startSession, 
  cookieController.setSSIDCookie,
  (req, res) => {
    console.log('login router receives post request');
    res.redirect('/');
  }
)

module.exports = router;