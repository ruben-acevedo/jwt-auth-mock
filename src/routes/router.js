const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.get("/hello/:token", (req, res) => {
  if (req.params.token) {
    try {
      const verified = jwt.verify(req.params.token, process.env.SECRET);
      res.send(`<h1>Hello World</h1>`);
    } catch (err) {
      res.send(err.message);
    }
  }
});

module.exports = router;
