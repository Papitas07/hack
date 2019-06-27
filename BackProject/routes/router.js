module.exports = (app) => {

    const router = app.Router();
    const customerRoute = require('./citizenRoute')(router);
    const authRoute = require('./authRoute')(router);
    const mailingRoute = require('./mailingRoute')(router);
    // const articleRoute = require('./articleRoute')(router);
    // const foodRoute = require('./foodRoute')(router);
    //idBox route pour stocker les paragraphes et pour get les paragraphes
    //Débats une question 3 réponses possibles citizens a plusieurs idées
    // Financement participatif, financière/montant participé/montant restant à financer/cout total / participation humaine
    return router;
}