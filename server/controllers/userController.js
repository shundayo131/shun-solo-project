const db = require('../models/models.js');
const bcrypt = require('bcryptjs');
const path = require('path');

// create an object to store controllers 
const userController = {};

// createUser: create a user and save a new user into the database
userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // TODO: return an error if the same username exists in database.
 
    // hash your password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // run a query to insert username/password (user is a reserved keyword in postgreSQL, so need "")
    const text = `
      INSERT INTO "user" (username, password)
      VALUES ($1, $2)
      RETURNING *
    ` 
    const param = [username, hashedPassword];

    // run query and insert data into the database 
    const result = await db.query(text, param);

    res.locals.user = result.rows[0];

    return next();

  } catch (error) {
    // 
  }
}

// verifyUser: 
// obtain a user name/password from the request body, 
// locate the appropriate user in the database,
// and then authenticate the submitted password against the password stored in the database
userController.verifyUser = async (req, res, next) => {
  try {
    // get user data in request body 
    const { username, password } = req.body;
    
    // get stored user
    const text = `
      SELECT "username", "password", "id"
      FROM "user"
      WHERE "username" = $1
      LIMIT 1;
    `
    const param = [username];

    const result = await db.query(text, param);
    const storedUser = result.rows[0];

    // compare bcrypt password of input password and stored password
    // if passwords don't match, redirect user to /signup 
    if (!storedUser || !(await bcrypt.compare(password, storedUser.password))) {
      return res.redirect('/signup');
    }
    // store stored user data in res.locals.user
    res.locals.user = storedUser;
    // return to next middleware 
    return next();

  } catch (error) {

  }
}

// get user 
userController.getUser = async (req, res, next) => {
  // get user_id from cookie, and respond back (to refactor - get a user id from database)
  const user_id = req.cookies.ssid;
  // pass it through res.local.user_id 
  res.locals.user_id = user_id;
  return next();
}

// get user name
userController.getUserName = async (req, res, next) => {
  // get a user_id based on ssid cookie 
  const user_id = req.cookies.ssid;

  const text = `
  SELECT username
  FROM "user"
  WHERE id = $1;
  `
  const param = [user_id];
  const result = await db.query(text, param);
  console.log(result)
  res.locals.username = result.rows[0].username;
  return next();
}

module.exports = userController;