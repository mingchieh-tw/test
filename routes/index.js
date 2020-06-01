const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const { error } = validateEmailData(req.body);
  //if (error) return res.status(400).send(error.details[0].message);

  res.send("<h1>helloworld</h1>");
});

module.exports = router;
