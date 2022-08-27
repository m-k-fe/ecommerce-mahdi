const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const products = require("./routes/products");
const register = require("./routes/register");
const login = require("./routes/login");
const stripe = require("./routes/stripe");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use("/api/products", products);
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/stripe", stripe);
const port = process.env.PORT || 5000;
const url = process.env.DB_URL;
app.listen(port, console.log(`Server Running On Port ${port}`));
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo DB Connection Succesful..."))
  .catch((err) => console.log("Mongo DB Connection Failed...", err));
