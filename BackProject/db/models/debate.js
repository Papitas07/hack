'use strict';
module.exports = (sequelize, DataTypes) => {
  const debate = sequelize.define('debate', {
    question: DataTypes.STRING,
    yes: DataTypes.NUMBER,
    no: DataTypes.NUMBER,
    so: DataTypes.NUMBER
  }, {});
  debate.associate = function(models) {
    // associations can be defined here
  };
  return debate;
};