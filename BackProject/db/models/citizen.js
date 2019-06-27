'use strict';
module.exports = (sequelize, DataTypes) => {
  const citizen = sequelize.define('citizen', {
    district: DataTypes.STRING,
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    login: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  citizen.associate = function(models) {
    // associations can be defined here
    
  };
  return citizen;
};