'use strict';
module.exports = (sequelize, DataTypes) => {
  const citizen = sequelize.define('citizen', {
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  citizen.associate = function(models) {
    // associations can be defined here
    
  };
  return citizen;
};