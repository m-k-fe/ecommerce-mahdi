const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  oldprice: String,
  newrice: String,
  image: String,
  category: String,
  description: String,
});
const Product = mongoose.model("Product", productSchema);
module.exports.Product = Product;
