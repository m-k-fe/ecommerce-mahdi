const jwt = require("jsonwebtoken");
const getAuthToken = (user) => {
  const secretkey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
    },
    secretkey
  );
  return token;
};
module.exports = getAuthToken;
