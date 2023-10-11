const getJWT = (req) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token !== undefined) {
    return token;
  } else {
    return {
      status: "failed",
      message: "token is not present",
    };
  }
};

module.exports = getJWT;
