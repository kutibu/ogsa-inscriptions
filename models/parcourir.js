'use strict';
module.exports = (sequelize, DataTypes) => {
  var parcourir = sequelize.define('parcourir', {
    idcourses : DataTypes.INTEGER,
    Numero : DataTypes.INTEGER,
    Nom : DataTypes.STRING,
    Distance : DataTypes.FLOAT,
    Heure : DataTypes.TIME,
    Categorie : DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        parcourir.belongsTo(models.courses, {foreignKey: 'idcourses', as: 'courses'})
      }
    }
  });

  return parcourir;
};