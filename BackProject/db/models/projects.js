'use strict';
module.exports = (sequelize, DataTypes) => {
  const projects = sequelize.define('projects', {
    totalCost: DataTypes.INTEGER,
    citizenID: DataTypes.INTEGER,
    projectName: DataTypes.STRING
  }, {});
  projects.associate = function(models) {
    // associations can be defined here
  };
  return projects;
};