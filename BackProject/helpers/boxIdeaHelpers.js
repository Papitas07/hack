const db = require('../db/models');
const boxIdeaModel= db.sequelize.import('../db/models/boxidea');

module.exports.createIdea = async (req, res) => {

    let response;
    try {
        console.log(req.idea)
        let newIdea = await boxIdeaModel.create({
            content:req.idea,
            citizenID:req.citizenID

        });
        response = JSON.stringify(newIdea);
    } catch (e) {
        console.error(e);
        response = e;
        res.status(404).send('Cant create');
    } finally {
        return response;
    }
}

// Fonction qui récupère tous les clients

module.exports.getIdea = async (req, res) => {

    let result;

    try {
        result = await boxIdeaModel.findAll();
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

module.exports.getIdeaByID = async (req, res) => {

    let result;

    try {
        result = await boxIdeaModel.findByPk(req.params.id);
    }

    catch (e) {
        res.status(404).send('Customer doesn\'t exist');
    }

    finally {
        return result;
    }
}

// Fonction qui récupère un client via son nom de société et vérifie son

module.exports.getOneIdea = async (username, password) => {

    try {
        let result = await boxIdeaModel.findOne({
            where: { citizenID: username }
        });
    }
    catch (e) {
        console.error(e);
        return false
    }
}