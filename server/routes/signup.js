const express = require('express');
const path = require('path'); 
const router = express.Router();
const userController = require('../controllers/userController.js');
const sessionController = require('../controllers/sessionController.js');
const cookieController = require('../controllers/cookieController.js');


router.get('/', (req, res) => {
  console.log('signup router receives a get request')
  res.sendFile(path.resolve(__dirname, '../../client/signup.html'));
  }
);

router.post('/', 
  userController.createUser, 
  sessionController.startSession, 
  cookieController.setSSIDCookie,
  (req, res) => {
    console.log('created a user and came back to the last middleware')
    // redirect to main app after sign up
    res.redirect('/'); 
  }
);

module.exports = router;