const jwt = require("jsonwebtoken");

const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.PRIVATE_KEY, { expiresIn: "10d" });
};
module.exports = generateJWT;
