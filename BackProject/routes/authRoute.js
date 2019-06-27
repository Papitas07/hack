const JWT = require('../helpers/jwtHelpers');
const client = require('../helpers/customerHelpers');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Route qui vérifie que l'utilisateur existe et renvoie un token le cas échéant

module.exports = (router) => {

    router.post('/login', async function (req, res, next) {

        let result = await client.getOneCustomer(req.body.society, req.body.password);

        if (result) {
            let payload = { id: result.id};
            let token = jwt.sign(payload, JWT.jwtOptions.secretOrKey);
            res.json({ msg: 'ok', token: token });
        }
        else {
            res.status(401).json({ msg: 'Password is incorrect' });
        }
    });

    router.get('/protected', passport.authenticate('jwt', { session: false }), function (req, res) {
        res.json('Success! You can now see this without a token.');
    });
};