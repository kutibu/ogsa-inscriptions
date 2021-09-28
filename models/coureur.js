'use strict';
module.exports = (sequelize, DataTypes) => {
  var coureur = sequelize.define('coureur', {
      NumLic_Coureur : DataTypes.INTEGER,
      Nom : DataTypes.INTEGER,
      Prenom : DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return coureur;
};