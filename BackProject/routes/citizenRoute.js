const customer = require('../helpers/citizenHelpers');


module.exports = (router) => {


  // Route qui récupère un client selon son ID

  router.get('/citizens/:id', function (req, res) {
    customer.getCitizenByID(req, res).then(user => res.json(user));
  });

  // Route qui récupère tous les Clients.

  router.get('/citizens', function (req, res) {
    customer.getCitizens(req, res).then(user => res.json(user));
  });

  // Route qui récupère les données fournies et enregistre un nouveau client.

  router.post('/register', function (req, res) {

    customer.createCitizen(req.body, res).then(user =>
      res.json({ user, msg: 'Account created successfully.' })
    );
  });
};
