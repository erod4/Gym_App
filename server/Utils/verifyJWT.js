const jwt = require("jsonwebtoken");
const verifyJWT = (token) => {
  return jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });
};

module.exports = verifyJWT;
