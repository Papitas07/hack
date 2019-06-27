require('dotenv').config();
const nodemailer = require('nodemailer');


module.exports.mailing = async (customer, res) => {



    try {

        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.email,
                pass: process.env.mailpass
            },
        });


        let info = await transporter.sendMail({
            from: '"Rémy"<teissier.remy@gmail.com>',
            to: customer.email,
            subject: 'Applyvrac, informations utilisateur',
            text: "Bienvenue chez ApplyVrac",
            html: `<b>Welcome<b><span>Login: ${customer.society}, Password: ${customer.password}</span>`
        });

        return info

    } catch (e) {
        console.error(e);
        res.status(404).send('Fail to send your e-mail')
    }
};