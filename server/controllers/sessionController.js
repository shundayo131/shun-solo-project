const db = require('../models/models.js');

const sessionController = {};

// isLoggedIn 
sessionController.isLoggedIn = async (req, res, next) => {
  console.log('isloggedIn hit')
  try {
    const ssid = req.cookies.ssid;
    if (!ssid) {
      return res.redirect('/signup');
    } 

    // get storedSession 
    const text = `
      SELECT cookieId 
      FROM session 
      WHERE cookieId = $1
    `
    const param = [ssid];
    const storedSession = await db.query(text, param);
    console.log('storedSession is: ', storedSession);
    if (storedSession) {
      return next();
    } else {
      return res.redirect('/signup');  
    };
  } catch (error) {

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