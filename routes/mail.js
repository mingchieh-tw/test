const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const { error } = validateEmailData(req.body);
  //if (error) return res.status(400).send(error.details[0].message);

  res.send("<h1>helloworld</h1>");
});

router.post("/", async (req, res) => {
  const { error } = validateEmailData(req.body);
  //if (error) return res.status(400).send(error.details[0].message);

  console.log(req.body);
  res.send("<h1>helloworld</h1>" + req.body);
});

function validateEmailData(mailData) {
  const schema = {
    subject: Joi.string().min(5).max(50).required(),
    email: Joi.string().email().required(),
    content: Joi.string(),
  };

  return Joi.validate(mailData, schema);
}

module.exports = router;
