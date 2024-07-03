const db = require('../models/resourceModels.js');

// create an object to store controllers 
const resourceController = {};

// TODO - add 'user_id' to resource to associate the data with a user. 

resourceController.addResource = async (req, res, next) => {
  console.log('inserting data to resource table')
  const { name, url, tag } = req.body;
  try {
    const text = `
      INSERT INTO resource (name, url, tag)
      VALUES ($1, $2, $3)
    ` 
    const param = [name, url, tag];
    const result = await db.query(text, param);
    return next();
  } catch (error) {
    // TODO - handle error 
  }
}

resourceController.getResource = async (req, res, next) => {
  console.log('get data from resource table');
  try {
    const text = `
      SELECT * FROM resource
    `
    const result = await db.query(text);
    res.locals.resourceList = [...result.rows];
    console.log('stored data in res.locals: ', res.locals.resourceList)
    return next();
  } catch {
    // TODO - handle error 
  }
  next();
}

module.exports = resourceController;