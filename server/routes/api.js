const express = require('express');

const resourceController = require('../controllers/resourceController.js');

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

module.exports = router;