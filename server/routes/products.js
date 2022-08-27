const express = require("express");
const { Product } = require("../models/productModel");
const router = express.Router();
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});
router.post("/", async (req, res) => {
  const product = await new Product(req.body);
  const saveP = await product.save();
  res.send(saveP);
});
router.get("/:id", async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  res.send(product);
});

module.exports = router;
