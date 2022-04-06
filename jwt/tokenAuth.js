const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  //getting the access token from the headers
  const token = req.headers.token?.split(" ")[1];

  //if no token found return 404 error
  if (!token) return res.status(401).json("You are not authenticated");

  //if there is a token
  jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    //if the token does not match with the token in the env file
    if (err) return res.status(403).json("Token is not valid");

    //if token found set user obj to the req
    req.user = user;

    return next();
  });
};

module.exports = verifyToken;
