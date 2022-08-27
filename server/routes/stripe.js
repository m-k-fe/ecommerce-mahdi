const express = require("express");
const Stripe = require("stripe");
require("dotenv").config();
const stripe = Stripe(process.env.STRIPE_KEY);
const router = express.Router();
router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
          description: item.description,
          metadata: {
            id: item._id,
          },
        },
        unit_amount: parseInt(item.newprice * 100),
      },
      quantity: item.qty,
    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/features`,
    cancel_url: `${process.env.CLIENT_URL}/features`,
  });
  res.send({ url: session.url });
});

module.exports = router;
