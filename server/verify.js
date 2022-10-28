const jwt = require("jsonwebtoken");

module.exports = async function auth(req, res, next) {
  const token = req.header("auth-token");
  if (!token) res.status(401).json({ mssg: "no token found", status: 1 });
  try {
    const verify = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = verify;
    next();
  } catch (err) {
    res.status(401).json({ mssg: "invalid token", status: 1 });
  }
};
