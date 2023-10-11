const AppErr = require("../Utils/appError");
const getJWT = require("../Utils/getJWT");
const verifyJWT = require("../Utils/verifyJWT");

const isLoggedIn = (req, res, next) => {
  //get token from req and pass it to getJWT function which returns token if it is present
  const token = getJWT(req);
  //verify token and return user id encrypted in jwt
  const decodedUser = verifyJWT(token);
  if (!decodedUser) {
    return next(new AppErr("Invalid/Expired Token", 401));
  }
  //store id into req object for any controller to use as long as they use isLogged in middleware
  req.user = decodedUser.id;
  next();
};

module.exports = isLoggedIn;
