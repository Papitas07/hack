const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors()); // Authorisation d'accès au serveur 

const JWT = require('./helpers/jwtHelpers'); // Passport/JWT import et initialisation
const passport = require('passport');
app.use(passport.initialize());
passport.use(JWT.strategy)


const bodyParser = require('body-parser');
app.use(bodyParser.json()); // Lire le body au format JSON
app.use(bodyParser.urlencoded({ extended: true }));//Lire au format x-www-form-urlencoded

const routes = require('./routes/router')(express); // Récupère les routes depuis
app.use('/api/', routes);                           // le dossier router

app.get('/', function(req, res) {
    res.json({ message: 'Express is up!' });
  });

app.listen(8080, function() {
  console.log(`Express is running on port 8080`);
});

module.exports = app;
