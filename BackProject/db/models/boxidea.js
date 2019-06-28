'use strict';
module.exports = (sequelize, DataTypes) => {
  const boxIdea = sequelize.define('boxIdea', {
    content: DataTypes.STRING,
    citizenID: DataTypes.NUMBER
  }, {});
  boxIdea.associate = function(models) {
    // associations can be defined here
  };
  return boxIdea;
};