const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")("sk_test_51MSDqwSIHeEFWJUKjmfg4aPbkkEvu7MtreCFtMk4i2iOxjaO0iJirjG8PrejSFTmBVhg343SWCXpb6J9HX6BinMx00HBWVpJNn");


exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "PVH_HOUSE",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY,stripeSecret:process.env.STRIPE_SECRET_KEY });
});
