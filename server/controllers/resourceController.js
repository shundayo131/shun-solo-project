const db = require('../models/models.js');

// create an object to store controllers 
const resourceController = {};

// TODO - add 'user_id' to resource to associate the data with a user. 

resourceController.addResource = async (req, res, next) => {
  // TODO: update the middleware to insert 'user_id'
  console.log('inserting data to resource table')
  const { name, url, tag, note, user_id } = req.body;
  try {
    const text = `
      INSERT INTO resource (name, url, tag, note, user_id)
      VALUES ($1, $2, $3, $4, $5)
    ` 
    const param = [name, url, tag, note, user_id];
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
      WHERE user_id = $1
    `
    const param = [req.cookies.ssid]; // added ssid in WHERE condition (CHECK if it works)
    const result = await db.query(text, param); 
    res.locals.resourceList = [...result.rows];
    return next();
  } catch {
    // TODO - handle error 
  }
  next();
}

module.exports = resourceController;