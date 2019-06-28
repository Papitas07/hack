'use strict';
module.exports = (sequelize, DataTypes) => {
  const debate = sequelize.define('debate', {
    question: DataTypes.STRING,
    yes: DataTypes.INTEGER,
    no: DataTypes.INTEGER,
    so: DataTypes.INTEGER
  }, {});
  debate.associate = function(models) {
    // associations can be defined here
  };
  return debate;
};