const router = require("express").Router();
const { User } = require("../../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authLockedRoute = require("./authLockedRoute");

// GET /users -- test endpoint
router.get("/", (req, res) => {
  res.json({ msg: "hello from users!" });
});

// POST /users/register -- CREATE a new user
router.post("/register", async (req, res) => {
  try {
    // look at req.body and see if the email exists already in th db
    const findUser = await User.findOne({
      email: req.body.email,
    });

    // if the user is found -- return function and respond
    if (findUser) return res.status(400).json({ msg: "email exists already" });

    // hash the password from the req.body
    const password = req.body.password;
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // CREATE a user in the db
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();

    // make a jwt payload
    const payload = {
      email: newUser.email,
      id: newUser.id,
    };

    // sign it and send it back
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 60 * 60,
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "🔥 OH NO server error" });
  }
});

// POST /users/login -- validate crendentials
router.post("/login", async (req, res) => {
  try {
    // try to find the user in db from the req.body
    const foundUser = await User.findOne({
      email: req.body.email,
    });

    const noLoginMessage = "Incorrect username or password";

    // if the user is not found -- return with a failure status and a message (incorrect email)
    if (!foundUser) return res.status(400).json({ msg: noLoginMessage });

    // check the password from the db against the req.body
    const matchPassword = await bcrypt.compare(
      req.body.password,
      foundUser.password
    );

    // if the provided password doesn't match -- return with a failure status
    if (!matchPassword) return res.status(400).json({ msg: noLoginMessage });

    // create jwt token
    const payload = {
      email: foundUser.email,
      id: foundUser.id,
    };

    // sign the jwt token and send it back
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 60 * 60,
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error AHHHHHH!" });
  }
});

// GET user by _id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.params.id,
    });
    res.json(user);
    // const findUsers = await id.();
  } catch (err) {
    console.log(err);
  }
});

// ToDo what routes next?

// GET /auth-locked -- redirect if a bad token is found
router.get("/auth-locked", authLockedRoute, (req, res) => {
  console.log(res.locals.user);
  res.json({ msg: "Welcome to the private route! 🥳" });
});

//  Delete /user by _id
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.deleteOne({
      _id: req.params.id,
    });
    res.json(user);
    // const deletedUsers = await Users.destroy();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
