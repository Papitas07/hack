module.exports = (app) => {

    const router = app.Router();
    const customerRoute = require('./customerRoute')(router);
    const authRoute = require('./authRoute')(router);
    const mailingRoute = require('./mailingRoute')(router);
    const articleRoute = require('./articleRoute')(router);
    const foodRoute = require('./foodRoute')(router);

    return router;
}