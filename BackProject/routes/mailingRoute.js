const mail = require('../helpers/mailingHelpers');


module.exports = (router) => {

    router.post('/sendmail', function (req, res) {
        mail.mailing(req.body, res)
            .then(customer => res.json({ msg: 'Mail succesfully send', customer }));
    })
};