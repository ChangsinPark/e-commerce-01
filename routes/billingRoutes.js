const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    //          frontend,    miidleware reference,    backend
    app.post('/api/stripe', requireLogin, async (req, res) => {
        // Inside here is req.body property
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });
        req.user.credits += 5;
        // To update and record every transactions occured
        const user = await req.user.save();
        // Pass this info to the react client side for user credit
        res.send(user);
    })
}