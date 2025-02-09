import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_KEY);

export const stripePayment = async(req, res, next) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "inr",
        },
        (stripeErr, stripeRes) => {
            if(stripeErr){
                res.status(500).json(stripeErr);
            }else{
                res.status(200).json(stripeRes);
            }
        }
    );
}