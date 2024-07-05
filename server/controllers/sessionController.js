const db = require('../models/models.js');

const sessionController = {};

// isLoggedIn 



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