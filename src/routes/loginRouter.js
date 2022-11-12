const router = require("express").Router();
const jwt = require("jsonwebtoken");

const exampleUser = {
  username: "user",
  pwd: "mypwd",
};

router.use("/", (req, res, next) => {
  const date = new Date(Date.now());
  console.log(
    `${req.method} at ${req.originalUrl}: ${date.toLocaleDateString()}`
  );
  next();
});

router.post("/login", (req, res) => {
  if (req.body.username === exampleUser.username) {
    const id = 1;
    const token = jwt.sign({ id }, process.env.SECRET);

    res.json({
      auth: true,
      token: token,
    });
  }
});

router.post("logout", (req, res) => {
  res.json({
    auth: false,
    token: null,
  });
});

module.exports = router;
