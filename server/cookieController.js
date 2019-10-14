const cookieController = {};
const User = require('./userModel.js');

cookieController.setUserIDCookie = (req, res, next) => {
  res.cookie('userid', JSON.stringify(res.locals.userID), {encode: String, httpOnly: true});
  return next();
}

cookieController.getInfofromCookie = (req, res, next) => {
  const userID = req.cookies.userid
  User.findByPk(userID).then(user => {
    if (user) {
      return next();
    } else {
      res.redirect('/notloggedin');
    }
  });
}

module.exports = cookieController;