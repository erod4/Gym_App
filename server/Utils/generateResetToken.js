const crypto = require("crypto");

const generateResetCode = () => {
  const resetCode = crypto.randomBytes(3).toString("hex");
  return resetCode;
};
module.exports = generateResetCode;
