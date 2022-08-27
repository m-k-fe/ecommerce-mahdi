const joi = require("joi");
const bcrypt = require("bcrypt");
const express = require("express");
const { User } = require("../models/userModel");
const getAuthToken = require("../utils/genAuthToken");

const router = express.Router();
router.post("/", async (req, res) => {
  const schema = joi.object({
    username: joi.string().min(3).max(30).required(),
    password: joi.string().min(6).max(200).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Username Or Password Is Wrong...");
  let isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(400).send("Username Or Password Is Wrong...");
  const token = getAuthToken(user);
  res.send(token);
});

module.exports = router;
