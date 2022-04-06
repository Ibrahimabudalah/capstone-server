const router = require("express").Router();
const bcrypt = require("bcrypt");
const user = require("../models/user");
const jwt = require("jsonwebtoken");

//endpoint to handle request at /register
router.post("/register", async (req, res) => {
  //getting fullname, email, password sent from the req.body
  const { fullname, email, password } = req.body;

  //checking if the user already exists
  const userExist = await user.findOne({ email });

  //if it exists send the json to the app
  if (userExist)
    return res.json({ code: "exist", message: "Email Already Exist" });

  //if it does not exist..

  //hashing the password using bcrypt
  bcrypt.hash(password, 10, async (err, hash) => {
    //saving the user to the database
    const user = await user.create({ fullname, email, password: hash });

    //signing in to jwt and get an access token
    const accessToken = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SEC,
      { expiresIn: "1d" }
    );

    //return and send the json to the app
    return res.json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      accessToken,
    });
  });
});

//endpoint to handle post request at /login
router.post("/login", async (req, res) => {
  //getting the fullname, email, password sent from the req.body
  const { email, password } = req.body;

  //finding the user by the email
  const user = await user.findOne({ email });

  //if it doesnt exist return to the app and send json
  if (!user)
    return res.json({
      code: "incorrect",
      message: "Email or Password is incorrect",
    });

  //comparing the user with the password
  bcrypt.compare(password, user.password, (err, result) => {
    //if the password doesnt match with user.password return json
    if (!result)
      return res.json({
        code: "incorrect",
        message: "Email or Password is incorrect",
      });

    //signing in to jwt and getting an accessToken
    const accessToken = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SEC,
      { expiresIn: "1d" }
    );

    //return and send json to the app
    return res.json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      accessToken,
    });
  });
});

module.exports = router;
