const db = require('../models/models.js');

const sessionController = {};

// isLoggedIn 
sessionController.isLoggedIn = async (req, res, next) => {
  console.log('isloggedIn hit')
  try {
    const ssid = req.cookies.ssid;
    console.log('ssid is ', ssid)
    if (!ssid) {
      return res.redirect('/login');
    } 
    // get stored session (double quate is needed for "cookieId" because it's case sensitive)
    const text = `
      SELECT "cookieId" 
      FROM session 
      WHERE "cookieId" = $1
    `;
    const param = [ssid];
    const result = await db.query(text, param);
    if (result) {
      return next();
    } else {
      return res.redirect('/signup');  
    };
  } catch (error) {
    console.log('error happened for db connection')
  }
}

// startSession 
sessionController.startSession = async (req, res, next) => {
  try{
    const userId = res.locals.user.id;

    // TODO: should generate a random sessionId for security purpose in production.

    // need "" on cookieId due to case sensitivity in a table
    const text = `
      INSERT INTO "session" ("cookieId")
      VALUES ($1)
      RETURNING *    
    `
    const param = [userId];
    const savedSession = await db.query(text, param);
    return next();
  } catch (error) {

  }
}

module.exports = sessionController;