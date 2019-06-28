'use strict';
module.exports = (sequelize, DataTypes) => {
  const projects = sequelize.define('projects', {
    totalCost: DataTypes.NUMBER,
    citizenID: DataTypes.NUMBER,
    projectName: DataTypes.STRING
  }, {});
  projects.associate = function(models) {
    // associations can be defined here
  };
  return projects;
};