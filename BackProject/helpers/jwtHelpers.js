const client = require('./citizenHelpers')
const passport = require('passport'); // Import du module passport/JWT
const passportJWT = require('passport-jwt');


let ExtractJwt = passportJWT.ExtractJwt; 

let JwtStrategy = passportJWT.Strategy;// Stratégie d'authentification (voir doc)
let jwtOptions = {}; // Objet options auquel on assigne les valeurs nécessaires(voir doc)

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'bambi';

// On créer la stratégie d'utilisation du token
let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  console.log('payload received', jwt_payload);
  let customer = client.getCustomerByID({ id: jwt_payload.id });
  console.log(jwt_payload.id)
  if (customer) {
    next(null, customer);
  } else {
    next(null, false);
  }
});

passport.use(strategy); // On utilise la stratégie dans le module Passport

let JWT = {} // On créer un objet afin d'exporter les variables

JWT.strategy = strategy;
JWT.jwtOptions = jwtOptions;

module.exports = JWT;

