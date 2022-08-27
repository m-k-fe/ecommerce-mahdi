const joi = require("joi");
const bcrypt = require("bcrypt");
const express = require("express");
const { User } = require("../models/userModel");
const getAuthToken = require("../utils/genAuthToken");
const router = express.Router();
router.post("/", async (req, res) => {
  const schema = joi.object({
    username: joi.string().min(3).max(30).required(),
    email: joi.string().min(3).max(200).required().email(),
    password: joi.string().min(6).max(200).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("This User Is Already Exist...");
  const newUser = await new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  const saveU = await newUser.save();
  const token = getAuthToken(saveU);
  res.send(token);
});

module.exports = router;
