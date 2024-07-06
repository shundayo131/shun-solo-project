const cookieController = {};

// setSSIDcookie
cookieController.setSSIDCookie = (req, res, next) => {
  // set SSID cookie with a value that is equal to the id of the user 
  // this middleware is called when a user successfully sign up or log in, and add SSID cookie in response. 
  const userId = res.locals.user.id; 
  // console.log('hit setSSID middleware with userID', userId);
  res.cookie('ssid', userId, { httpOnly : true }); 
  return next();
};

module.exports = cookieController;