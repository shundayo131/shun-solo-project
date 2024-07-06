const express = require('express');

const resourceController = require('../controllers/resourceController.js');
const userController = require('../controllers/userController.js');

const router = express.Router();

// handle post request to /api - add resource to 'resource' table  
router.post('/', 
  resourceController.addResource,(req, res) => {
    res.status(200).json('success');
  }
);

// handle get request to /api - get resource from 'resource' table 
router.get('/',
  resourceController.getResource, (req, res) => {
    res.status(200).json(res.locals.resourceList);
  }
)

// TODO: handle get request to /api/user to get user_id from a table
router.get('/user',
  userController.getUser,
  (req, res) => {
    res.status(200).json(res.locals.user_id);
  }
)

module.exports = router;