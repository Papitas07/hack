const db = require('../db/models');
const citizenModel = db.sequelize.import('../db/models/citizen');
const argon2 = require('argon2');

// Fonction qui créer un nouveau Client, sur la base des données fournies par la route POST.
module.exports.createCitizen = async (req, res) => {

    let response;
    try {
        let newCitizen = await citizenModel.create({
            number: req.number,
            address: req.address,
            firstName: req.firstName,
            lastName: req.lastName,
            email: req.email,
            district: req.district,
            password: await argon2.hash(req.password),
        });
        response = JSON.stringify(newCitizen);
    } catch (e) {
        console.error(e);
        response = e;
        res.status(404).send('Cant create');
    } finally {
        return response;
    }
}

// Fonction qui récupère tous les clients

module.exports.getCitizens = async (req, res) => {

    let result;

    try {
        result = await citizenModel.findAll();
    }

    catch (e) {
        console.error(e)
        res.send({});
    }

    finally {
        return result;
    }
}

// Fonction qui récupère un client via son ID

module.exports.getCitizenByID = async (req, res) => {

    let result;

    try {
        result = await citizenModel.findByPk(req.params.id);
    }

    catch (e) {
        res.status(404).send('Customer doesn\'t exist');
    }

    finally {
        return result;
    }
}

// Fonction qui récupère un client via son nom de société et vérifie son

module.exports.getOneCitizen = async (username, password) => {

    try {
        let result = await citizenModel.findOne({
            where: { society: username }
        });

        if (await argon2.verify(result.password, password)) {
            return result
        }
        else {
            throw new Error('Password doesn\'t match')
        }
    }
    catch (e) {
        console.error(e);
        return false
    }
}